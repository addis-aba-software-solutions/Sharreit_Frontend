import React from "react";
import {
  Typography,
  IconButton,
  Paper,
  TextField,
  Badge,
  Grid,
  Divider,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
} from "@material-ui/core";
import Something from "../../../Assets/Rentalhouse.jpg";
import SendRoundedIcon from "@material-ui/icons/SendRounded";

const classes = {
  root: {
    padding: 50,
    borderRadius: 10,
  },
  image: {
    minHeight: 500,
    maxHeight: 500,
    borderRadius: 10,
  },
  otherImages: {
    height: 111,
    borderRadius: 10,
  },
  title: {
    paddingBottom: 10,
    fontSize: 30,
    fontWeight: 600,
    color: "#004C3F",
  },
  titleContainer: {
    // something??
  },
  bodyTitle: {
    fontWeight: 600,
    fontSize: 25,
    paddingBottom: 30,
  },
  bodybody: {
    color: "#7D7D7D",
  },
  bodyTitle2: {
    padding: 10,
  },
  availability: {
    backgroundColor: "#008060",
    padding: 5,
    paddingLeft: 20,
    borderRadius: 10,
    paddingRight: 20,
    color: "#FFFFFF",
    marginBottom: 10,
    marginLeft: 30,
  },
  spacing: {
    margin: 10,
    height: 5,
  },
  description: {
    padding: 10,
  },
  sendIcon: {
    marginTop: 10,
    color: "#008060",
  },
  TermAndCondition: {
    backgroundColor: "#008060",
    color: "#FFFFFF",
  },
};

export default () => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll("paper");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        style={classes.popup}
      >
        <DialogTitle id="scroll-dialog-title">
          Term and Condition for <b>Item Name</b>
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(10)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Got It</Button>
        </DialogActions>
      </Dialog>

      <Paper style={classes.root}>
        {" "}
        <Grid xs={12}>
          <Typography style={classes.title} variant="h4">
            House For Rent House For Rent House For Rent
          </Typography>
        </Grid>
        <Grid container xs={12}>
          <Grid xs={7}>
            <img src={Something} style={classes.image} alt="" />
            <Grid container spacing={3}>
              <Grid item align="center">
                <img src={Something} style={classes.otherImages} alt="" />
              </Grid>
              <Grid item>
                <img
                  align="center"
                  src={Something}
                  style={classes.otherImages}
                  alt=""
                />
              </Grid>
              <Grid item>
                <img
                  align="center"
                  src={Something}
                  style={classes.otherImages}
                  alt=""
                />
              </Grid>
              <Grid item>
                <img
                  align="center"
                  src={Something}
                  style={classes.otherImages}
                  alt=""
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid xs={5}>
            <Typography style={classes.bodyTitle} align="left">
              House For Rent House For Rent House For Rent
            </Typography>

            <Grid container xs={12}>
              <Grid xs={6} item>
                <Grid container spacing={3}>
                  <Grid item>
                    <Typography style={classes.bodyTitle2}>
                      <b>Price / Day</b>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography style={classes.bodybody}>600$</Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={3}>
                  <Grid item>
                    <Typography style={classes.bodyTitle2}>
                      <b>Condition</b>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography style={classes.bodybody}>New</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid xs={6} item>
                <Grid container spacing={3}>
                  <Grid item>
                    <Typography style={classes.bodyTitle2}>
                      <b>Share Count</b>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography style={classes.bodybody}>89 Times</Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={3}>
                  <Grid item>
                    <Badge
                      badgeContent={
                        <Typography style={classes.availability}>
                          Available
                        </Typography>
                      }
                    >
                      <Typography style={classes.bodyTitle2}>
                        <b>Availability Check</b>
                      </Typography>
                    </Badge>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider style={classes.spacing} />
            <Grid xs={12} style={classes.description}>
              <Typography>
                <b>Description</b>
              </Typography>
            </Grid>
            <Grid xs={12} style={classes.description}>
              <Typography>
                As the year is coming to a close, we at JJ’s List have been
                reaching out to you, our reviewers, to find out how your
                experience on our site has been. One of the things we heard back
                was that it’s not always obvious to everyone how to write a
                useful review.
              </Typography>
            </Grid>
            <Divider style={classes.spacing} />
            <div style={classes.spacing} />

            <Grid xs={12} item align="center">
              <Button
                variant="contained"
                style={classes.TermAndCondition}
                onClick={handleClickOpen()}
              >
                Terms And Conditions of this Item
              </Button>
            </Grid>
            <div style={classes.spacing} />

            <Grid xs={12} item align="left">
              <Typography variant="caption">
                Please Make sure you have read the terms and conditions of this
                item before contacting the Supplier
              </Typography>
            </Grid>

            <Box style={classes.spacing} />

            <Grid container xs={12} display="flex" justify="space-between">
              <Grid item xs={11}>
                <TextField fullWidth multiline label="Contact The Supplier" />
              </Grid>
              <Grid item xs={1}>
                <IconButton style={classes.sendIcon}>
                  <SendRoundedIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
