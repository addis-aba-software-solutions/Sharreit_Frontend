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
import preLoaderImage from '../../../Assets/circle_loading_1.gif'
import classes from './itemViewStyles'
import fetchItem from '../functions/fetchItem'
import { statusCodes } from '../../../Config/config'

export default ({ id }) => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [loaded, setLoaded] = React.useState(false)
  const [otherImages, setOtherImages] = React.useState([])
  const [postContent, setPost] = React.useState({})

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll("paper");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(async () => {
    const { status, data } = await fetchItem(id)
    console.log(id)
    if (status === statusCodes.SUCCESS) {
      const { post } = data
      var fetchedPost = {
        category: post.category,
        condition: post.condition,
        description: post.description,
        email: post.email,
        images: post.postImage,
        price: post.price,
        sold: post.sold,
        subCatagory: post.subCatagory,
        termAndCondition: post.termAndCondition,
        title: post.title
      }
      
      setPost(fetchedPost)
      setLoaded(true)
    }
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
            {postContent.termAndCondition}
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
        </Grid>
        <Grid container xs={12}>
          <Grid xs={7}>
            <img src={loaded? postContent.images[0] : preLoaderImage} style={classes.image} alt="" />
            <Grid container spacing={3}>
              {
                loaded?
                  postContent.images.map((item, index) => (
                    index === 0? "" : <Grid item align="center">
                      <img src={item} style={classes.otherImages} alt={"Product " + index} />
                    </Grid>
                  ))
                : ""
              }
            </Grid>
          </Grid>

          <Grid xs={5}>
            <Typography style={classes.bodyTitle} align="left">
              {loaded? postContent.title : "Fetching your item..."}
            </Typography>

            <Grid container xs={12}>
              <Grid xs={6} item>
                <Grid container spacing={3}>
                  <Grid item>
                    <Typography style={classes.bodyTitle2}>
                      {loaded? <b>Price / Day</b> : ""}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography style={classes.bodybody}>{loaded? postContent.price : ""}</Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={3}>
                  <Grid item>
                    <Typography style={classes.bodyTitle2}>
                      {loaded? <b>Condition</b> : ""}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography style={classes.bodybody}>{loaded? postContent.condition : "" }</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid xs={6} item>
                <Grid container spacing={3}>
                  <Grid item>
                    <Typography style={classes.bodyTitle2}>
                      {loaded? <b>Share Count</b> : ""}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography style={classes.bodybody}>{loaded? "89 Times" : ""}</Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={3}>
                  <Grid item>
                    {loaded? (
                      <Badge
                        badgeContent={
                          <Typography style={classes.availability}>
                            {postContent.sold? "SOLD" : "Available"}
                          </Typography>
                        }
                      >
                        <Typography style={classes.bodyTitle2}>
                          <b>Availability</b>
                        </Typography>
                      </Badge>
                    ) : ""}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider style={classes.spacing, { display: loaded? "flex" : "none" }} />
            <Grid xs={12} style={classes.description}>
              <Typography>
                {loaded? <b>Description</b> : ""}
              </Typography>
            </Grid>
            <Grid xs={12} style={classes.description}>
              <Typography>
                {loaded? postContent.description : "" }
              </Typography>
            </Grid>
            <Divider style={classes.spacing, { display: loaded? "flex" : "none" }} />
            <div style={classes.spacing} />

            <Grid xs={12} item align="center">
              <Button
                variant="contained"
                style={classes.TermAndCondition, { display: loaded? "flex" : "none" }}
                onClick={handleClickOpen}
              >
                Terms And Conditions of this Item
              </Button>
            </Grid>
            <div style={classes.spacing} />

            <Grid xs={12} item align="left">
              <Typography variant="caption" style={{ display: loaded? "flex" : "none" }}>
                Please Make sure you have read the terms and conditions of this
                item before contacting the Supplier
              </Typography>
            </Grid>

            <Box style={classes.spacing} />

            <Grid container xs={12} display="flex" justify="space-between" style={{ display: loaded? "flex" : "none" }}>
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
