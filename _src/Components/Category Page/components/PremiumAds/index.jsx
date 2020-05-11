import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, Button, Grid, Typography, Box } from "@material-ui/core";
import Something from "../../../../Assets/bulldozer.jpg";
import House from "../../../../Assets/Rental_house.jpg";
import StarIcon from "@material-ui/icons/Star";
import { easings } from "react-animation";

const classes = {
  image: {
    height: 600,
    borderRadius: 30,
  },
  imageContainer: {
    backgroundColor: "#F3FCF4",
  },
  sliderTextContainer: {
    margin: 100,
    height: "auto",
  },
  sliderContainer: {
    backgroundColor: "#F3FCF4",
  },
  sliderTitle: {
    fontWeight: 600,
    fontSize: 40,
    color: "#004C3F",
  },
  sliderBody: {
    fontSize: 30,
    fontWeight: 10,
    color: "#004C3F",
  },
  sliderBody2: {
    fontSize: 20,
    color: "#004C3F",
  },
  rating: {
    color: "#F8E757",
  },
  sliderBody2Container: {
    marginLeft: 20,
    animation: `pop-in ${easings.easeOutExpo} 2000ms forwards`,
  },
  sliderButton: {
    backgroundColor: "#008060",
    color: "#FFFFFF",
    marginTop: 10,
  },
};

export default () => (
  <Carousel autoPlay infiniteLoop>
    <Card>
      <Grid style={classes.imageContainer} container xs={12}>
        <Grid item xs={6}>
          <img style={classes.image} alt="" src={Something} />
        </Grid>

        <Grid item xs={6} style={classes.sliderContainer}>
          <Box style={classes.sliderTextContainer}>
            <Grid container>
              <StarIcon fontSize="large" style={classes.rating} />
              <StarIcon fontSize="large" style={classes.rating} />
              <StarIcon fontSize="large" style={classes.rating} />
              <StarIcon fontSize="large" style={classes.rating} />
              <StarIcon fontSize="large" />
            </Grid>
            <Typography align="left" style={classes.sliderTitle}>
              House For Rent
            </Typography>
            <Typography align="left" style={classes.sliderBody}>
              <b>Price :</b> 877$/Week
            </Typography>
            <Typography align="left" style={classes.sliderBody}>
              <b>Condition :</b> New
            </Typography>
            <Typography align="left" style={classes.sliderBody}>
              <b>Description</b>
            </Typography>

            <Box style={classes.sliderBody2Container}>
              <Typography align="left" style={classes.sliderBody2}>
                As the year is coming to a close, we at JJ’s List have been
                reaching out to you, our reviewers, to find out how your
                experience on our site has been. One of the things we heard back
                was that it’s not always obvious to everyone how to write a
                useful review.
              </Typography>
            </Box>

            <Button
              variant="contained"
              size="large"
              style={classes.sliderButton}
              startIcon={<StarIcon />}
            >
              Check It Out
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Card>

    <Card>
      <Grid container xs={12}>
        <Grid style={classes.imageContainer} item xs={6}>
          <img style={classes.image} alt="" src={House} />
        </Grid>

        <Grid item xs={6} style={classes.sliderContainer}>
          <Box style={classes.sliderTextContainer}>
            <Grid container>
              <StarIcon fontSize="large" style={classes.rating} />
              <StarIcon fontSize="large" style={classes.rating} />
              <StarIcon fontSize="large" style={classes.rating} />
              <StarIcon fontSize="large" style={classes.rating} />
              <StarIcon fontSize="large" />
            </Grid>
            <Typography align="left" style={classes.sliderTitle}>
              House For Rent
            </Typography>
            <Typography align="left" style={classes.sliderBody}>
              <b>Price :</b> 877$/Week
            </Typography>
            <Typography align="left" style={classes.sliderBody}>
              <b>Condition :</b> New
            </Typography>
            <Typography align="left" style={classes.sliderBody}>
              <b>Description</b>
            </Typography>

            <Box style={classes.sliderBody2Container}>
              <Typography align="left" style={classes.sliderBody2}>
                As the year is coming to a close, we at JJ’s List have been
                reaching out to you, our reviewers, to find out how your
                experience on our site has been. One of the things we heard back
                was that it’s not always obvious to everyone how to write a
                useful review.
              </Typography>
            </Box>

            <Button
              variant="contained"
              size="large"
              style={classes.sliderButton}
              startIcon={<StarIcon />}
            >
              Check It Out
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Card>

    <Card>
      <Grid container xs={12}>
        <Grid style={classes.imageContainer} item xs={6}>
          <img style={classes.image} alt="" src={Something} />
        </Grid>

        <Grid item xs={6} style={classes.sliderContainer}>
          <Box style={classes.sliderTextContainer}>
            <Grid container>
              <StarIcon fontSize="large" style={classes.rating} />
              <StarIcon fontSize="large" style={classes.rating} />
              <StarIcon fontSize="large" style={classes.rating} />
              <StarIcon fontSize="large" style={classes.rating} />
              <StarIcon fontSize="large" />
            </Grid>
            <Typography align="left" style={classes.sliderTitle}>
              House For Rent
            </Typography>
            <Typography align="left" style={classes.sliderBody}>
              <b>Price :</b> 877$/Week
            </Typography>
            <Typography align="left" style={classes.sliderBody}>
              <b>Condition :</b> New
            </Typography>
            <Typography align="left" style={classes.sliderBody}>
              <b>Description</b>
            </Typography>

            <Box style={classes.sliderBody2Container}>
              <Typography align="left" style={classes.sliderBody2}>
                As the year is coming to a close, we at JJ’s List have been
                reaching out to you, our reviewers, to find out how your
                experience on our site has been. One of the things we heard back
                was that it’s not always obvious to everyone how to write a
                useful review.
              </Typography>
            </Box>

            <Button
              variant="contained"
              size="large"
              style={classes.sliderButton}
              startIcon={<StarIcon />}
            >
              Check It Out
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Card>

    <Card>
      <Grid container xs={12}>
        <Grid style={classes.imageContainer} item xs={6}>
          <img style={classes.image} alt="" src={House} />
        </Grid>

        <Grid item xs={6} style={classes.sliderContainer}>
          <Box style={classes.sliderTextContainer}>
            <Grid container>
              <StarIcon fontSize="large" style={classes.rating} />
              <StarIcon fontSize="large" style={classes.rating} />
              <StarIcon fontSize="large" style={classes.rating} />
              <StarIcon fontSize="large" style={classes.rating} />
              <StarIcon fontSize="large" />
            </Grid>
            <Typography align="left" style={classes.sliderTitle}>
              House For Rent
            </Typography>
            <Typography align="left" style={classes.sliderBody}>
              <b>Price :</b> 877$/Week
            </Typography>
            <Typography align="left" style={classes.sliderBody}>
              <b>Condition :</b> New
            </Typography>
            <Typography align="left" style={classes.sliderBody}>
              <b>Description</b>
            </Typography>

            <Box style={classes.sliderBody2Container}>
              <Typography align="left" style={classes.sliderBody2}>
                As the year is coming to a close, we at JJ’s List have been
                reaching out to you, our reviewers, to find out how your
                experience on our site has been. One of the things we heard back
                was that it’s not always obvious to everyone how to write a
                useful review.
              </Typography>
            </Box>

            <Button
              variant="contained"
              size="large"
              style={classes.sliderButton}
              startIcon={<StarIcon />}
            >
              Check It Out
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Card>

    <Card>
      <Grid container xs={12}>
        <Grid style={classes.imageContainer} item xs={6}>
          <img style={classes.image} alt="" src={Something} />
        </Grid>

        <Grid item xs={6} style={classes.sliderContainer}>
          <Box style={classes.sliderTextContainer}>
            <Grid container>
              <StarIcon fontSize="large" style={classes.rating} />
              <StarIcon fontSize="large" style={classes.rating} />
              <StarIcon fontSize="large" style={classes.rating} />
              <StarIcon fontSize="large" style={classes.rating} />
              <StarIcon fontSize="large" />
            </Grid>
            <Typography align="left" style={classes.sliderTitle}>
              House For Rent
            </Typography>
            <Typography align="left" style={classes.sliderBody}>
              <b>Price :</b> 877$/Week
            </Typography>
            <Typography align="left" style={classes.sliderBody}>
              <b>Condition :</b> New
            </Typography>
            <Typography align="left" style={classes.sliderBody}>
              <b>Description</b>
            </Typography>

            <Box style={classes.sliderBody2Container}>
              <Typography align="left" style={classes.sliderBody2}>
                As the year is coming to a close, we at JJ’s List have been
                reaching out to you, our reviewers, to find out how your
                experience on our site has been. One of the things we heard back
                was that it’s not always obvious to everyone how to write a
                useful review.
              </Typography>
            </Box>

            <Button
              variant="contained"
              size="large"
              style={classes.sliderButton}
              startIcon={<StarIcon />}
            >
              Check It Out
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Card>

    <Card>
      <Grid container xs={12}>
        <Grid style={classes.imageContainer} item xs={6}>
          <img style={classes.image} alt="" src={House} />
        </Grid>

        <Grid item xs={6} style={classes.sliderContainer}>
          <Box style={classes.sliderTextContainer}>
            <Grid container>
              <StarIcon fontSize="large" style={classes.rating} />
              <StarIcon fontSize="large" style={classes.rating} />
              <StarIcon fontSize="large" style={classes.rating} />
              <StarIcon fontSize="large" style={classes.rating} />
              <StarIcon fontSize="large" />
            </Grid>
            <Typography align="left" style={classes.sliderTitle}>
              House For Rent
            </Typography>
            <Typography align="left" style={classes.sliderBody}>
              <b>Price :</b> 877$/Week
            </Typography>
            <Typography align="left" style={classes.sliderBody}>
              <b>Condition :</b> New
            </Typography>
            <Typography align="left" style={classes.sliderBody}>
              <b>Description</b>
            </Typography>

            <Box style={classes.sliderBody2Container}>
              <Typography align="left" style={classes.sliderBody2}>
                As the year is coming to a close, we at JJ’s List have been
                reaching out to you, our reviewers, to find out how your
                experience on our site has been. One of the things we heard back
                was that it’s not always obvious to everyone how to write a
                useful review.
              </Typography>
            </Box>

            <Button
              variant="contained"
              size="large"
              style={classes.sliderButton}
              startIcon={<StarIcon />}
            >
              Check It Out
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Card>
  </Carousel>
);
