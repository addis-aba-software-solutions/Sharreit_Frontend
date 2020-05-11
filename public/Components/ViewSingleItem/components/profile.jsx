import React from "react";
import {
  Paper,
  Avatar,
  Box,
  Grid,
  Divider,
  Typography,
} from "@material-ui/core";
import ProfilePicture from "../../../Assets/ww.jpg";
import StarIcon from "@material-ui/icons/Star";
import Facebook from "../../../Assets/FaceBookSVG.svg";
import WhatsApp from "../../../Assets/WhatsAppSVG.svg";
import Telegram from "../../../Assets/TelegramSVG.svg";

const classes = {
  root: {
    minHeight: 50,
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
    fontSize: 29,
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
};

export default function Profile() {
  return (
    <Paper style={classes.root}>
      <Grid container xs={12}>
        <Grid item xs={4} align="left">
          <Avatar
            alt="Profile Picture"
            src={ProfilePicture}
            style={classes.profilePicture}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography align="left" style={classes.ProfileName}>
            John Doe
          </Typography>
          <Grid container>
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
              }}
            >
              (97)
            </Typography>
          </Grid>
          <Grid style={classes.textColor}>
            <Typography align="left" variant="body2">
              Member Since : 12/02/2019 (Family)
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
                  hdjahsdgjashdgajshdgjhg
                </Typography>
              </Grid>
            </Grid>
            <Grid style={{ marginTop: 10 }} container xs={12}>
              <Grid item xs={2}>
                <Avatar variant="square" style={classes.small} src={Telegram} />
              </Grid>
              <Grid item xs={10} style={{ marginTop: 4 }}>
                <Typography variant="body2">
                  hdjahsdgjashdgajshdgjhg
                </Typography>
              </Grid>
            </Grid>

            <Grid style={{ marginTop: 10 }} container xs={12}>
              <Grid item xs={2}>
                <Avatar variant="square" style={classes.small} src={WhatsApp} />
              </Grid>
              <Grid item xs={10} style={{ marginTop: 4 }}>
                <Typography variant="body2">
                  hdjahsdgjashdgajshdgjhg
                </Typography>
              </Grid>
            </Grid>
          </Grid>
      </Grid>
    </Paper>
  );
}
