import React from "react";
import { Typography, Box, AppBar, Grid } from "@material-ui/core";
import HomePageHeader from "./components/HomePageHeader";
import classes from "./styles";
import AllItems from "./components/itemView";

export default function Landing() {
  return (
    <>
      <AppBar position="fixed">
        <HomePageHeader />
      </AppBar>
      <Box style={classes.bodySpacer} />

      <Box style={classes.root}>
        <Grid container spacing={2} xs={12}>
          <Grid item xs={3}>
            <AllItems />
          </Grid>
          <Grid item xs={3}>
            <AllItems />
          </Grid>{" "}
          <Grid item xs={3}>
            <AllItems />
          </Grid>{" "}
          <Grid item xs={3}>
            <AllItems />
          </Grid>{" "}
          <Grid item xs={3}>
            <AllItems />
          </Grid>{" "}
          <Grid item xs={3}>
            <AllItems />
          </Grid>{" "}
          <Grid item xs={3}>
            <AllItems />
          </Grid>{" "}
          <Grid item xs={3}>
            <AllItems />
          </Grid>{" "}
          <Grid item xs={3}>
            <AllItems />
          </Grid>
          <Grid item xs={3}>
            <AllItems />
          </Grid>
          <Grid item xs={3}>
            <AllItems />
          </Grid>
          <Grid item xs={3}>
            <AllItems />
          </Grid>
          <Grid item xs={3}>
            <AllItems />
          </Grid>
          <Grid item xs={3}>
            <AllItems />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
