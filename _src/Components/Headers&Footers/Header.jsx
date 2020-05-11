import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import classes from "./styles";
import {
  Button,
  Grid,
  AppBar,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Logo from "../../Assets/Group.svg";
import keys from "../../Config/keys";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import routes from "../../Config/routes"

export default ({ history }) => {
  const fullName = sessionStorage.getItem(keys["FULL_NAME"]);

  return (
    <AppBar
      style={{
        backgroundColor: "#F3FCF4",
        borderShadow: 0,
        padding: 15,
        paddingLeft: 30,
      }}
    >
      <div style={classes.container}>
        <Grid container xs={12} display="flex" justify="space-between">
          <Grid container xs={6} spacing={3}>
            <Grid item>
              <img src={Logo} style={classes.Logo} alt="" />
            </Grid>
            <Grid item style={classes.ShareAppPadding}>
              <Button style={classes.Headertext1}>
                <Grid container>
                  <Grid item>start</Grid>
                  <Grid item style={classes.expand}>
                    <ExpandMoreIcon fontSize="small" />
                  </Grid>
                </Grid>
              </Button>
            </Grid>
            <Grid item>
              <Button style={classes.Headertext1}>
                <Grid container>
                  <Grid item>Sell</Grid>
                  <Grid item style={classes.expand}>
                    <ExpandMoreIcon fontSize="small" />
                  </Grid>
                </Grid>
              </Button>
            </Grid>
            <Grid item>
              <Button style={classes.Headertext1}>
                <Grid container>
                  <Grid item>Market</Grid>
                  <Grid item style={classes.expand}>
                    <ExpandMoreIcon fontSize="small" />
                  </Grid>
                </Grid>
              </Button>
            </Grid>
            <Grid item>
              <Button style={classes.Headertext1}>
                <Grid container>
                  <Grid item>Manage</Grid>
                  <Grid item style={classes.expand}>
                    <ExpandMoreIcon fontSize="small" />
                  </Grid>
                </Grid>
              </Button>
            </Grid>
          </Grid>

          <Grid xs={6} container spacing={4} display="flex" justify="flex-end">
            <Grid item>
              <Button style={classes.Headertext1}>
                <Grid container>
                  <Grid item>Pricing</Grid>
                  <Grid item style={classes.expand}>
                    <ExpandMoreIcon fontSize="small" />
                  </Grid>
                </Grid>
              </Button>
            </Grid>
            <Grid item>
              <Button style={classes.Headertext1}>
                <Grid container>
                  <Grid item>Learn</Grid>
                  <Grid item style={classes.expand}>
                    <ExpandMoreIcon fontSize="small" />
                  </Grid>
                </Grid>
              </Button>
            </Grid>
            <Grid item>
              {fullName === "" || history.location.pathname == routes.singleItem? (
                ""
              ) : (
                <IconButton
                  align="right"
                  variant="contained"
                  style={classes.button}
                  onClick={() => history.push(routes.singleItem)}
                >
                  <Add />
                </IconButton>
              )}
            </Grid>
            <Grid item>
              {fullName === "" ? (
                <Button
                  align="right"
                  variant="contained"
                  style={classes.button}
                >
                  Categories
                </Button>
              ) : (
                <Grid container>
                  <Grid item>
                    <Typography variant="body1" style={classes.user_name}>
                      {fullName}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <IconButton>
                      <ExitToAppIcon color='secondary' />
                    </IconButton>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </AppBar>
  );
};
