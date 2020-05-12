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
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import routes from "../../../Config/routes"
import keys from "../../../Config/keys"

export default ({ history }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.clear()
    routeChange(routes.root)
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [auth, setAuth] = React.useState(false)
  const [hideShare, setHide] = React.useState(false)
  const [hideAbout, setHideAbout] = React.useState(false)
  React.useEffect(() => {
    if (localStorage.getItem(keys['TOKEN'])) setAuth(true)
    if (history.location.pathname === routes.addItem) setHide(true)
    if (history.location.pathname === routes.about) setHideAbout(true)
  })

  const routeChange = (link) => {
    history.push(link)
  }

  return (
    <Box position="static" className={classes.appbar}>
      <Grid container xs={12} display="flex" justify="space-between">
        <Grid item xs={2} align="center" className={classes.LogoContainer}>
          <img src={Logo} className={classes.Logo} alt="" />
        </Grid>
        <Grid container xs={6}>
          <Grid item xs={8} align="left" className={classes.searchContainer}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search Sharreit"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Grid>
          <Grid item xs={3} align="left" className={classes.searchContainer}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Category"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Grid>
        </Grid>

        <Grid container display='flex' justify='flex-end' className={classes.appbarRightSide} spacing={4} xs={4}>
            {
              (
                <Grid item> 
                  <Button className={classes.Headertext1} onClick={() => routeChange(routes.addItem)}>
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
              )
            }
          {
            (
              <Grid item>
                <Button className={classes.Headertext1} onClick={() => routeChange(routes.about)}>
                  <Grid className={classes.tt} item>
                    About Sharreit
                  </Grid>
                </Button>
              </Grid>
            )
          }
          {
            auth? (
              <Grid item>
                <Button className={classes.Headertext1} onClick={logout}>
                    <Grid container spacing={1} className={classes.logout}>
                      <Grid item>
                        <ExitToAppIcon color="secondary" />
                      </Grid>
                      <Grid item className={classes.center}>
                        Logout
                      </Grid>
                    </Grid>
                </Button>
              </Grid>
            ) : (
              <Grid item>
                <Button className={classes.Headertext1} onClick={() => routeChange(routes.signIn)}>
                  <Grid className={classes.tt} item>
                    Log in
                  </Grid>
                </Button>
              </Grid>
            )
          }
          {
            auth? "" : (
              <Grid item>
                <Button className={classes.Headertext1} onClick={() => routeChange(routes.registration)}>
                  <Grid className={classes.tt} item>
                    Sign Up
                  </Grid>
                </Button>
              </Grid>
            )
          }
        </Grid>
      </Grid>
    </Box>
  );
}
