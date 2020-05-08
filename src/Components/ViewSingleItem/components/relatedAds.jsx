import React from "react";
import { Typography, Box, Grid, List, Card, Paper } from "@material-ui/core";
import Something from "../../../Assets/Rentalhouse.jpg";
import fetchItems from '../../ViewAllItems/functions/fetchItemsBySubCategory'
import { statusCodes } from '../../../Config/config'
import routes from '../../../Config/routes'

const classes = {
  title: {
    fontWeight: 550,
    fontSize: 20,
    paddingLeft: 10,
  },
  relatedAds: {
    padding: 5,
  },
  relatedAdsPicture: {
    height: 150,
    maxWidth: 200,
    minWidth: 200,
    borderRadius: 10,
  },
  relatedAdsTitle: {
    paddingTop: 10,
    color: "#004C3F",
    fontWeight: 600,
    paddingLeft: 10,
  },
  relatedAdsBody: {
    paddingTop: 10,
    // color: "#004C3F",
    paddingLeft: 10,
  },
  relatedAdsContainer: {
    maxHeight: 430,
    overflow: "auto",
    backgroundColor: "#F3FCF4",
    boxShadow: 0,
  },
  relatedAdsPictureContainer: {
    display: 'flex'
  }
};
export default ({ id, category, subCategory, changeID }) => {
  const [loaded, setLoaded] = React.useState(false)
  const [content, setContent] = React.useState([])

  React.useEffect(async () => {
    const { status, data } = await fetchItems(category, subCategory)
    if (status === statusCodes.SUCCESS) {
      const { posts } = data
      setContent(posts)
      setLoaded(true)
    }
  }, [])

  return (
    <>
      <Grid xs={12} style={{ display: loaded && content.length > 0? "flex" : "none" }}>
        <Typography align="left" style={classes.title}>
          Related Ads
        </Typography>
      </Grid>
      <Box style={classes.relatedAdsContainer}>
        <List>
          {
            loaded? content.map((item, index) => (
              item.id !== id? (
                <Grid container xs={12} style={classes.relatedAds} onClick={() => changeID(item.id)}>
                <Grid xs={6} align="left">
                  <img src={item.post.postImage[0]} style={classes.relatedAdsPicture} alt="" />
                </Grid>
                <Grid xs={6} align="left">
                  <Typography style={classes.relatedAdsTitle}>
                    {item.post.title}
                  </Typography>
                  <Typography style={classes.relatedAdsBody}>
                    {`${item.post.price}$/ Day`}
                  </Typography>
                  <Typography style={classes.relatedAdsBody}>
                    Rent Count: 34 Times
                  </Typography>
                </Grid>
              </Grid>
              ) : ""
            )) : <div></div>
          }
        </List>
      </Box>
    </>
  );
}
