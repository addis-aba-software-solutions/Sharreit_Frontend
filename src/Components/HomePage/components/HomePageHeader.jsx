import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import { Menu, Button, Grid } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import useStyles from "./HeaderStyles";
import Logo from "../../../Assets/Group.svg";

export default function HomePageHeader() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appbar}>
      <Grid container xs={12} display="flex" justify="space-between">
        <Grid item xs={2} align="center" className={classes.LogoContainer}>
          <img src={Logo} className={classes.Logo} alt="" />
        </Grid>

        <Grid item xs={3} align="center" className={classes.searchContainer}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Grid>

        <Grid align="right" item xs={5}>
          <Button>Sell</Button>
          <Button>About</Button>
          <Button>Login</Button>
          <Button>SignUp</Button>

        </Grid>
      </Grid>
    </AppBar>
  );
}
