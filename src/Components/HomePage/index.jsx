import React from "react";
import { Typography, Box, Button, AppBar, Grid } from "@material-ui/core";
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

      <Grid
        xs={12}
        align="center"
        style={classes.HeaderSecondRow}
        spacing={5}
      >
        <Button style={classes.Headertext2}>
          <Grid item>product Sharing</Grid>
        </Button>
        <Button style={classes.Headertext2}>
          <Grid item>service Sharing</Grid>
        </Button>
        <Button style={classes.Headertext2}>
          <Grid item>Digital Sharing</Grid>
        </Button>
      </Grid>

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
