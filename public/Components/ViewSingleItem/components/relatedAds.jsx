import React from "react";
import { Typography, Box, Grid, List, Card, Paper } from "@material-ui/core";
import Something from "../../../Assets/Rentalhouse.jpg";

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
    maxHeight: 200,
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
};
export default function relatedAds() {
  return (
    <>
      <Grid xs={12}>
        <Typography align="left" style={classes.title}>
          Related Ads
        </Typography>
      </Grid>
      <Box style={classes.relatedAdsContainer}>
        <List>
          <Grid container xs={12} style={classes.relatedAds}>
            <Grid xs={6} align="left">
              <img src={Something} style={classes.relatedAdsPicture} alt="" />
            </Grid>
            <Grid xs={6} align="left">
              <Typography style={classes.relatedAdsTitle}>
                House For Rent House For Rent House For Rent
              </Typography>
              <Typography style={classes.relatedAdsBody}>600$/ Day</Typography>
              <Typography style={classes.relatedAdsBody}>
                Rent Count: 34 Times
              </Typography>
            </Grid>
          </Grid>
          <Grid container xs={12} style={classes.relatedAds}>
            <Grid xs={6} align="left">
              <img src={Something} style={classes.relatedAdsPicture} alt="" />
            </Grid>
            <Grid xs={6} align="left">
              <Typography style={classes.relatedAdsTitle}>
                House For Rent House For Rent House For Rent
              </Typography>
              <Typography style={classes.relatedAdsBody}>600$/ Day</Typography>
              <Typography style={classes.relatedAdsBody}>
                Rent Count: 97 Times
              </Typography>
            </Grid>
          </Grid>
          <Grid container xs={12} style={classes.relatedAds}>
            <Grid xs={6} align="left">
              <img src={Something} style={classes.relatedAdsPicture} alt="" />
            </Grid>
            <Grid xs={6} align="left">
              <Typography style={classes.relatedAdsTitle}>
                House For Rent House For Rent House For Rent
              </Typography>
              <Typography style={classes.relatedAdsBody}>600$/ Day</Typography>
              <Typography style={classes.relatedAdsBody}>
                Rent Count: 97 Times
              </Typography>
            </Grid>
          </Grid>
          <Grid container xs={12} style={classes.relatedAds}>
            <Grid xs={6} align="left">
              <img src={Something} style={classes.relatedAdsPicture} alt="" />
            </Grid>
            <Grid xs={6} align="left">
              <Typography style={classes.relatedAdsTitle}>
                House For Rent House For Rent House For Rent
              </Typography>
              <Typography style={classes.relatedAdsBody}>600$/ Day</Typography>
              <Typography style={classes.relatedAdsBody}>
                Rent Count: 97 Times
              </Typography>
            </Grid>
          </Grid>
          <Grid container xs={12} style={classes.relatedAds}>
            <Grid xs={6} align="left">
              <img src={Something} style={classes.relatedAdsPicture} alt="" />
            </Grid>
            <Grid xs={6} align="left">
              <Typography style={classes.relatedAdsTitle}>
                House For Rent House For Rent House For Rent
              </Typography>
              <Typography style={classes.relatedAdsBody}>600$/ Day</Typography>
              <Typography style={classes.relatedAdsBody}>
                Rent Count: 97 Times
              </Typography>
            </Grid>
          </Grid>
        </List>
      </Box>
    </>
  );
}
