import React from "react";
import Header from "../Headers&Footers/Header";
import Footer from "../Headers&Footers/Footer";
import classes from "./styles";
import { Grid, Divider, Typography, Box } from "@material-ui/core";
import Profile from "./components/profile";
import RelatedAds from "./components/relatedAds";
import ItemView from "./components/itemView";
import fetchItem from "./functions/fetchItem";
import preLoaderImage from "../../Assets/circle_loading_1.gif";
import PremiumAds from "../Category Page/components/PremiumAds";

export default ({ location }) => {
  const [postID, setID] = React.useState(location.state.id)

  const changeID = (id) => {
    console.log(postID)
    setID(id)
  }

  return (
    <>
    <div style={classes.root}>
      <Grid xs={12} style={classes.appbarShift}>
        <Header />
      </Grid>
      <Grid container xs={12} spacing={3}>
        <Grid item xs={9} style={classes.singleItemView}>
          <ItemView id={postID} />
        </Grid>
        <Grid item xs={3} style={classes.divider} align="center">
          <Grid item>
            <Profile />
          </Grid>
          <Box
            style={{
              height: 10,
            }}
          />
          <Divider></Divider>
          <Box
            style={{
              height: 10,
            }}
          />
          <Grid item>
            <RelatedAds changeID={changeID} id={postID} category={location.state.category} subCategory={location.state.subCategory} />
          </Grid>
        </Grid>
      </Grid>
      <Divider style={{ margin: 20 }}></Divider>
      <Grid xs={4} container>
        <Typography style={classes.PremiumAds}>Premium Ads</Typography>
      </Grid>
      <PremiumAds />
      <Divider style={{ margin: 20 }}></Divider>


    </div>
          <Grid>
          <Footer />
        </Grid>
        </>
  );
}
