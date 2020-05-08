import React from "react";
import Header from "../Headers&Footers/Header";
import Footer from "../Headers&Footers/Footer";
import classes from "./styles";
import { Grid, Divider, Typography, Box } from "@material-ui/core";
import Profile from "./components/profile";
import RelatedAds from "./components/relatedAds";
import ItemView from "./components/itemView";

export default function SingleItem() {
  return (
    <div style={classes.root}>
      <Grid xs={12} style={classes.appbarShift}>
        <Header />
      </Grid>
      <Grid container xs={12} spacing={3}>
        <Grid item xs={9} style={classes.singleItemView}>
          <ItemView />
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
            <RelatedAds />
          </Grid>
        </Grid>
      </Grid>
      <Divider></Divider>
      <Typography>Premium Ads</Typography>
      <Divider style={{ marginTop: 20 }}></Divider>

      {/* <Grid>
        <Footer />
      </Grid> */}
    </div>
  );
}
