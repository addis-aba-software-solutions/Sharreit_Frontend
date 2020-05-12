import React from "react";
import Header from "../Headers&Footers/Header";
import Footer from "../Headers&Footers/Footer";
import classes from "./styles";
import { Grid, Divider, Typography, Box, AppBar } from "@material-ui/core";
import Profile from "./components/profile";
import RelatedAds from "./components/relatedAds";
import ItemView from "./components/itemView";
import PremiumAds from "../Category Page/components/PremiumAds";
import HomePageHeader from "../HomePage/components/HomePageHeader";

export default ({ history }) => {
  const [postID, setID] = React.useState(history.location.state.id);

  const changeID = (id) => {
    setID(id);
  };

  return (
    <>
      <div style={classes.root}>
        <Grid xs={12} style={classes.appbarShift}>
          <AppBar>
            <HomePageHeader history={history} />
          </AppBar>
        </Grid>
        <Grid container xs={12} spacing={3}>
          <Grid item xs={9} style={classes.singleItemView}>
            <ItemView id={postID} />
          </Grid>
          <Grid item xs={3} style={classes.divider} align="center">
            <Grid item>
              <Profile history={history} id={postID} />
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
              <RelatedAds
                changeID={changeID}
                id={postID}
                category={history.location.state.category}
                subCategory={history.location.state.subCategory}
              />
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
};
