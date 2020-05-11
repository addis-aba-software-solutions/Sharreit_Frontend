import React from "react";
import { Typography, Grid, Paper, Card } from "@material-ui/core";

import { subCategories, categories, icons } from "../data";

const styles = {
  root: {
    padding: 20,
    height: "auto",
    borderRadius: 5,
  },
  SVG: {
    height: 60,
    color: "#FFFFFF",
  },
  CardTitle: {
    color: "#7d7d7d",
    fontSize: 15,
    fontWeight: 600,
  },
  padding: {
    padding: 5,
  },
};

export default function categoriesCard({ type, gotoViewItem }) {
  return (
    <Grid container xs={12} spacing={3} display>
      {subCategories[categories[type]].map((item, index) => (
        <Grid item xs={2}>
          <Card style={styles.root} onClick={() => gotoViewItem(index)}>
            <Grid container xs={12}>
              <Grid item xs={12} align="center" style={styles.padding}>
                <img
                  src={icons[categories[type]][index]}
                  style={styles.SVG}
                  alt=""/>
              </Grid>
              <Grid item xs={12} align="center" style={styles.padding}>
                <Typography style={styles.CardTitle}>{item}</Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
