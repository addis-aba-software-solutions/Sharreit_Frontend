import React from "react";

import {
  Button,
  Divider,
  Box,
  Grid,
} from "@material-ui/core";
import classes from "./styles";

export default function Footer() {
  return (
    <Grid xs={12}>
      <Box style={classes.FooterContainer}>
        <Grid container spacing={3}>
          <Grid item>
            <Button size="small" style={classes.footerText1}>
              About Us
            </Button>
          </Grid>
          <Grid item>
            <Button size="small" style={classes.footerText1}>
              Terms And Conditions
            </Button>
          </Grid>
          <Grid item>
            <Button size="small" style={classes.footerText1}>
              Contact Us
            </Button>
          </Grid>
          <Grid item>
            <Button size="small" style={classes.footerText1}>
              Need Help?
            </Button>
          </Grid>
        </Grid>
        <Divider style={{ backgroundColor: "#FFFFFF" }}></Divider>
      </Box>
    </Grid>
  );
}
