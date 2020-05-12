import React from "react";
import Header from "../Headers&Footers/Header";
import Footer from "../Headers&Footers/Footer";
import classes from "./styles";
import { Divider, Grid, Typography, AppBar } from "@material-ui/core";
import Filter from "./components/filter";
import ItemsView from "./components/itemsView";
import HomePageHeader from "../HomePage/components/HomePageHeader";

export default function ViewAllItems({ history, location }) {
  return (
    <>
      <AppBar position="fixed">
        <HomePageHeader history={history} />
      </AppBar>
      <div style={classes.appbarShift} />

      <main style={classes.root}>
        <Grid container xs={12}>
          <Grid item xs={3} align='center'>
            <Typography style={classes.headers}>Filter Your Search</Typography>
            <Filter />
            <Divider />
          </Grid>
          <Grid item xs={9}>
            <Typography style={classes.headers}>
              {location.state.category}
            </Typography>
            <ItemsView
              history={history}
              category={location.state.category}
              subCategory={location.state.subCategory}
              myItems={location.state.myItems}
            />
          </Grid>
        </Grid>
      </main>

      <Footer />
    </>
  );
}
