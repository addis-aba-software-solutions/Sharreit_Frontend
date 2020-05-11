import React from "react";
import {
  Typography,
  Box,
  Button,
  AppBar,
  Popover,
  Grid,
} from "@material-ui/core";
import HomePageHeader from "./components/HomePageHeader";
import classes from "./styles";
import AllItems from "./components/itemView";

export default function Landing() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <AppBar position="fixed">
        <HomePageHeader />
      </AppBar>
      <Box style={classes.bodySpacer} />

      <Grid xs={12} align="center" style={classes.HeaderSecondRow} spacing={5}>
        <Button onClick={handleClick} style={classes.Headertext2}>
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

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <AllItems />
      </Popover>
    </>
  );
}
