import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import { Menu, Button, Grid, Box } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import useStyles from "./HeaderStyles";
import Logo from "../../../Assets/Group.svg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CameraAltIcon from "@material-ui/icons/CameraAlt";

export default function HomePageHeader() {
  const classes = useStyles();

  return (
    <Box position="static" className={classes.appbar}>
      <Grid container xs={12} display="flex" justify="space-between">
        <Grid item xs={2} align="center" className={classes.LogoContainer}>
          <img src={Logo} className={classes.Logo} alt="" />
        </Grid>

        <Grid item xs={6} align="left" className={classes.searchContainer}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Shareit"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Grid>

        <Grid container className={classes.appbarRightSide} spacing={4} xs={4}>
          <Grid item>
            <Button className={classes.Headertext1}>
              <Grid container spacing={1}>
                <Grid item className={classes.expand}>
                  <CameraAltIcon fontSize="large" />
                </Grid>
                <Grid className={classes.tt} item>
                  Share
                </Grid>
              </Grid>
            </Button>
          </Grid>
          <Grid item>
            <Button className={classes.Headertext1}>
              <Grid className={classes.tt} item>
                About
              </Grid>
            </Button>
          </Grid>
          <Grid item>
            <Button className={classes.Headertext1}>
              <Grid className={classes.tt} item>
                Log in
              </Grid>
            </Button>
          </Grid>
          <Grid item>
            <Button className={classes.Headertext1}>
              <Grid className={classes.tt} item>
                Sign Up
              </Grid>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        xs={12}
        align="center"
        className={classes.HeaderSecondRow}
        spacing={5}
      >
        <Button className={classes.Headertext2}>
          <Grid item>product Sharing</Grid>
        </Button>
        <Button className={classes.Headertext2}>
          <Grid item>service Sharing</Grid>
        </Button>
        <Button className={classes.Headertext2}>
          <Grid item>Digital Sharing</Grid>
        </Button>
      </Grid>
    </Box>
  );
}
