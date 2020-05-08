import React from "react";
import Header from "../Headers&Footers/Header";
import Footer from "../Headers&Footers/Footer";
import classes from "./styles";
import { Divider, Grid, Typography } from "@material-ui/core";
import Filter from "./components/filter";
import ItemsView from "./components/itemsView";

export default function ViewAllItems({ history }) {
  return (
    <>
      <div style={classes.appbarShift}>
        <Header />
      </div>
      <main style={classes.root}>
        <Grid container xs={12}>
          <Grid item xs={3}>
            <Typography style={classes.headers}>Filter Your Search</Typography>
            <Filter />
            <Divider />
          </Grid>
          <Grid item xs={9}>
            <Typography style={classes.headers}>
              Category Descreption Goes Here
            </Typography>
            <ItemsView history={history} />
          </Grid>
        </Grid>
      </main>

      <Footer />
    </>
  );
}
