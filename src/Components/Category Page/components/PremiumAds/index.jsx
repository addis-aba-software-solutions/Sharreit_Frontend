import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, Button, Grid, Typography, Box } from "@material-ui/core";
import Something from "../../../../Assets/bulldozer.jpg";
import House from "../../../../Assets/Rental_house.jpg";
import StarIcon from "@material-ui/icons/Star";
import { easings } from "react-animation";
import fetchItems from "./functions/fetchItems"
import { statusCodes } from "../../../../Config/config"

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
    color: "#083991",
  },
  sliderBody: {
    fontSize: 30,
    fontWeight: 10,
    color: "#1081D1",
  },
  sliderBody2: {
    fontSize: 20,
    color: "#1081D1",
  },
  rating: {
    color: "#F8E757",
  },
  sliderBody2Container: {
    marginLeft: 20,
    animation: `pop-in ${easings.easeOutExpo} 2000ms forwards`,
  },
  sliderButton: {
    backgroundColor: "#1081D1",
    color: "#FFFFFF",
    marginTop: 10,
  },
};


const PremiumAds = ({ posts }) => {
  const [state, setState] = React.useState({
    content: []
  })
  const [loaded, setLoaded] = React.useState(false)
  React.useEffect(async () => {
    const { status, data } = await fetchItems()
    if (status === statusCodes.SUCCESS) {
      const { posts } = data
      var LIMIT = 6
      var fetchedItems = posts.map((item, index) => (
        <Ad key={index}
          title={item.post.title}
          condition={item.post.condition}
          description={item.post.description}
          id={item.id}
          image={item.post.postImage[0]}
          price={item.post.price}
        />
      ))
      
      var sliced = fetchedItems.slice(0, LIMIT)
      setState({ ...state, content: sliced })
    }
  }, [])


  const Ad = ({ title, description, price, image, condition, id }) => {
    return (
      <Card>
        <Grid style={classes.imageContainer} container xs={12}>
          <Grid item xs={6}>
            <img style={classes.image} alt="" src={image} />
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
                {title}
              </Typography>
              <Typography align="left" style={classes.sliderBody}>
                <b>Price :</b> {price}$/Week
              </Typography>
              <Typography align="left" style={classes.sliderBody}>
                <b>Condition :</b>{condition}
              </Typography>
              <Typography align="left" style={classes.sliderBody}>
                <b>Description</b>
              </Typography>
  
              <Box style={classes.sliderBody2Container}>
                <Typography align="left" style={classes.sliderBody2}>
                  {description}
                </Typography>
              </Box>
  
              <Button
                variant="contained"
                size="large"
                style={classes.sliderButton}
                startIcon={<StarIcon />}
                onClick={() => alert(id)}
              >
                Check It Out
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Card>
    )
  }

  const ads = Array(6).fill("").map(item => (
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
  ))



  return (
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        {state.content}
      </Carousel>
  )
}

export default PremiumAds