import React from "react";
import {
  Paper,
  Avatar,
  Box,
  Grid,
  Divider,
  Typography,
  Button
} from "@material-ui/core";
import ProfilePicture from "../../../Assets/ww.jpg";
import StarIcon from "@material-ui/icons/Star";
import Facebook from "../../../Assets/FaceBookSVG.svg";
import WhatsApp from "../../../Assets/WhatsAppSVG.svg";
import Telegram from "../../../Assets/TelegramSVG.svg";
import fetchProfile from '../functions/fetchProfile'
import { statusCodes } from '../../../Config/config'
import preLoader from '../../../Assets/circle_loading_2.gif'

const classes = {
  root: {
    // minHeight: 50,
    height: "auto",
    padding: 20,
    borderRadius: 10,
  },
  profilePicture: {
    height: 102,
    width: 102,
  },
  ProfileName: {
    fontWeight: 600,
    color: "#004C3F",
    fontSize: 25,
  },
  Star: {
    color: "#F8E757",
  },
  textColor: {
    color: "#7D7D7D",
    padding: 10,
  },
  small: {
    width: 30,
    height: 30,
  },
  button: {
    backgroundColor: "#008060",
    color: "#FFFFFF",
  },
};

export default function Profile() {
  const [user, setUser] = React.useState({})
  const [loaded, setLoaded] = React.useState(false)

  React.useEffect(async () => {
    const { data, status } = await fetchProfile()
    if (status === statusCodes.SUCCESS) {
      const { credentials } = data
      var fetchedUser = {
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        imageUrl: credentials.imageUrl,
        createdAt: credentials.createdAt,
        facebook: credentials.facebook,
        telegram: credentials.telegram,
        whatsapp: credentials.whatsapp
      }
      setUser(fetchedUser)
      setLoaded(true)
    }
  }, [])

  return (
    <Paper style={classes.root}>
      <Grid container xs={12}>
        <Grid item xs={4} align="left">
          <Avatar
            alt="Profile Picture"
            src={loaded? user.imageUrl : preLoader}
            style={classes.profilePicture}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography align="left" style={classes.ProfileName}>
            {loaded? user.firstName + " " + user.lastName : ""}
          </Typography>
          <Grid container style={{ display: loaded? "flex" : "none" }}>
            <StarIcon style={classes.Star} />
            <StarIcon style={classes.Star} />
            <StarIcon style={classes.Star} />
            <StarIcon style={classes.Star} />
            <StarIcon />
            <Typography
              variant="body2"
              style={{
                marginTop: 3,
                color: "#7D7D7D",
                display: loaded? "flex" : "none"
              }}
            >
              (97)
            </Typography>
          </Grid>
          <Grid style={classes.textColor}>
            <Typography align="left" variant="body2">
              {loaded? user.createdAt : ""}
            </Typography>
          </Grid>

        </Grid>
        <Grid xs={12} align="left">
            <Typography glutterBottom>Contact Information</Typography>
            <Divider />
            <Grid style={{ marginTop: 10 }} container xs={12}>
              <Grid item xs={2}>
                <Avatar style={classes.small} src={Facebook} />
              </Grid>
              <Grid item xs={10} style={{ marginTop: 4 }}>
                <Typography variant="body2">
                  {loaded? user.facebook : ""}
                </Typography>
              </Grid>
            </Grid>
            <Grid style={{ marginTop: 10 }} container xs={12}>
              <Grid item xs={2}>
                <Avatar variant="square" style={classes.small} src={Telegram} />
              </Grid>
              <Grid item xs={10} style={{ marginTop: 4 }}>
                <Typography variant="body2">
                  {loaded? user.telegram : ""}
                </Typography>
              </Grid>
            </Grid>

            <Grid style={{ marginTop: 10 }} container xs={12}>
              <Grid item xs={2}>
                <Avatar variant="square" style={classes.small} src={WhatsApp} />
              </Grid>
              <Grid item xs={10} style={{ marginTop: 4 }}>
                <Typography variant="body2">
                  {loaded? user.whatsapp : ""}
                </Typography>
              </Grid>
            </Grid>

          <Divider />

          <Grid align='center' style={{ marginTop: 10 }} xs={12}>
                <Button style={classes.button, {display: loaded? "" : "none"} }  size='small' variant="contained">
                      Your Items
                </Button>
            </Grid>

        </Grid>
      </Grid>
    </Paper>
  );
}
