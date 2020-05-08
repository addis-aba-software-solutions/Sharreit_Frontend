import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CarImage from "../../Assets/SomeCar.jpg";
import CarImage2 from "../../Assets/bulldozer.jpg";
import homeImage from "../../Assets/Rentalhouse.jpg";
import bulldozer from "../../Assets/bulldozer2.jpg";
import classes from "./styles";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Boat from "../../Assets/boatss.png";
import fetchUserInfo from "./functions/fetchUserInfo";
import {
  Button,
  Typography,
  IconButton,
  Divider,
  Box,
  Grid,
  AppBar,
} from "@material-ui/core";
import Logo from "../../Assets/Group.svg";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import AnimatedButtons from "./animated-buttons";
import routes from "../../Config/routes";
import keys from "../../Config/keys";
import fetchAllItems from "./functions/fetchItems";

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = { animationStart: false };
  }

  routeChange() {
    this.props.history.push(routes.signIn);
  }

  async componentDidMount() {
    const token = sessionStorage.getItem(keys["TOKEN"]);
    if (typeof token === "string") {
      //await fetchUserInfo()
    }

    await fetchAllItems();
  }

  render() {
    return (
      <>
        <Box style={classes.root}>
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
                          <ArrowRightAltIcon fontSize="small" />
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

                <Grid
                  xs={6}
                  container
                  spacing={4}
                  display="flex"
                  justify="flex-end"
                >
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
                    <Button
                      onClick={this.routeChange.bind(this)}
                      style={classes.Headertext2}
                    >
                      LOGIN
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      align="right"
                      variant="contained"
                      style={classes.button}
                    >
                      Categories
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </AppBar>
          {/* End of AppBar Portion ? */}
          <Box
            style={{
              height: 100,
            }}
          />
          {/* Starting Of Body One */}
          <Grid container xs={12} spacing={10}>
            {/* Starting Of Body One's Right Side */}
            <Grid item xs={6}>
              <Typography style={classes.body_One} align="left">
                Share ---
              </Typography>
              <Typography style={classes.body_OneEverything} align="left">
                everything
              </Typography>
              <Typography style={classes.body_Two} align="left">
                One Platform that lets you Share Whatever you have Whenever is
                required blah blah lets you Share Your Whatever you have
              </Typography>
              <Grid style={classes.body_Three} container xs={12}>
                <Grid xs={5}>
                  <Typography align="left" style={classes.body_Three_Header}>
                    Online Store
                  </Typography>
                  <Typography
                    align="left"
                    variant="body2"
                    style={classes.body_Three_Body}
                  >
                    Browse Through Our Store to find what you’re looking for
                    ough Our Store to find what you’re looking for
                  </Typography>
                </Grid>
                <Grid
                  xs={5}
                  style={{
                    paddingLeft: 80,
                    // animation: animations.slideIn
                  }}
                >
                  <Typography align="left" style={classes.body_Three_Header}>
                    Online Store
                  </Typography>
                  <Typography
                    align="left"
                    variant="body2"
                    style={classes.body_Three_Body}
                  >
                    Browse Through Our Store to find what you’re looking for
                    ough Our Store to find what you’re looking for
                  </Typography>
                </Grid>
              </Grid>
              <Grid style={classes.body_Three} container xs={12}>
                <Grid xs={5}>
                  <Typography align="left" style={classes.body_Three_Header}>
                    Online Store
                  </Typography>
                  <Typography
                    align="left"
                    variant="body2"
                    style={classes.body_Three_Body}
                  >
                    Browse Through Our Store to find what you’re looking for
                    ough Our Store to find what you’re looking for
                  </Typography>
                </Grid>
                <Grid
                  xs={5}
                  style={{
                    paddingLeft: 80,
                  }}
                >
                  <Typography align="left" style={classes.body_Three_Header}>
                    Online Store
                  </Typography>
                  <Typography
                    align="left"
                    variant="body2"
                    style={classes.body_Three_Body}
                  >
                    Browse Through Our Store to find what you’re looking for
                    ough Our Store to find what you’re looking for
                  </Typography>
                </Grid>
              </Grid>
              <Grid style={classes.body_Three} container xs={12}>
                <Grid xs={5}>
                  <Typography align="left" style={classes.body_Three_Header}>
                    Online Store
                  </Typography>
                  <Typography
                    align="left"
                    variant="body2"
                    style={classes.body_Three_Body}
                  >
                    Browse Through Our Store to find what you’re looking for
                    ough Our Store to find what you’re looking for
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            {/* Starting Of Body One's Left Side ? */}
            <Grid item xs={6} style={classes.spacing}>
              <Grid item>
                <img style={classes.CarImage} src={CarImage} alt="" />
              </Grid>
              <Grid
                container
                spacing={2}
                display="flex"
                justify="space-between"
              >
                <Grid item>
                  <img style={classes.CarImage2} src={CarImage2} alt="" />
                </Grid>
                <Grid item>
                  <img style={classes.CarImage2} src={bulldozer} alt="" />
                </Grid>
              </Grid>
              <Box style={classes.LastImage} />
            </Grid>
          </Grid>
        </Box>
        <Box style={{ height: 30 }} />

        <Grid xs={12} align="center">
          <IconButton>
            <MoreHorizIcon style={classes.threeDots} />
          </IconButton>
        </Grid>

        <Grid container xs={12}>
          <Grid item xs={2} align="left">
            <AnimatedButtons start={true} amount={4} />
          </Grid>

          <Grid item xs={10} align="left">
            <Box style={classes.cars}>
              <Grid item xs={12}>
                <Typography align="left" style={classes.secondaryContainers}>
                  Product Sharing
                </Typography>
              </Grid>
              <Grid xs={12}>
                <Typography align="left" style={classes.secondaryContainers1}>
                  Make Money by Sharing your Products!
                </Typography>
                <Typography
                  align="left"
                  style={{
                    fontWeight: 10,
                    color: "#7D7D7D",
                  }}
                >
                  Bring your Finances to life with a Sharing website.
                </Typography>
              </Grid>

              {/* Card One Body */}
              <Grid container xs={12} spacing={2} style={classes.cardOneBody}>
                <Grid item xs={6}>
                  <div>
                    <Typography
                      align="left"
                      style={classes.secondaryContainers}
                    >
                      COLLEGE TEXTBOOKS
                    </Typography>
                    <Typography
                      align="left"
                      style={{
                        fontWeight: 10,
                        color: "#7D7D7D",
                        paddingTop: 10,
                      }}
                    >
                      Share your textbooks so others could aksjdhaksjdhaskj
                      dhaskjdhkjdhaksjdhkaj
                    </Typography>
                  </div>
                  <div
                    style={{
                      paddingTop: 30,
                    }}
                  >
                    <Typography
                      align="left"
                      style={classes.secondaryContainers}
                    >
                      CAMPING GEAR
                    </Typography>
                    <Typography
                      align="left"
                      style={{
                        fontWeight: 10,
                        color: "#7D7D7D",
                        paddingTop: 10,
                      }}
                    >
                      Bring your Minamn to life with an Rental website. Bring
                      your Minamn to life with an Rental website.
                    </Typography>
                  </div>
                  <div
                    style={{
                      paddingTop: 30,
                    }}
                  >
                    <Typography
                      align="left"
                      style={classes.secondaryContainers}
                    >
                      FARMING EQUIPMENTS
                    </Typography>
                    <Typography
                      align="left"
                      style={{
                        fontWeight: 10,
                        color: "#7D7D7D",
                        paddingTop: 10,
                      }}
                    >
                      Bring your Minamn to life with an Rental website. Bring
                      your Minamn to life with an Rental website.
                    </Typography>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  display="flex"
                  justify="flex-end"
                  style={{
                    marginTop: 30,
                  }}
                >
                  <img style={classes.CarImage2} src={CarImage2} alt="" />
                </Grid>
              </Grid>
              <Grid xs={12} container display="flex" justify="flex-end">
                <Button>
                  <Typography variant="caption">
                    See More SHARED PRODUCTS
                  </Typography>
                  <ArrowRightAltIcon />
                </Button>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        <Box style={{ height: 30 }} />
        <Grid xs={12} align="center">
          <IconButton>
            <MoreHorizIcon style={classes.threeDots} />
          </IconButton>
        </Grid>

        <Box>
          <Grid container xs={12}>
            <Grid item xs={6} align="center">
              <Box style={classes.carsother}>
                <Grid item xs={12}>
                  <Typography align="left" style={classes.secondaryContainers}>
                    SERVICE SHARING :
                  </Typography>
                </Grid>
                <Grid xs={12}>
                  <Typography align="left" style={classes.secondaryContainers1}>
                    Find The Best Residence That Fits you Most
                  </Typography>
                  <Typography
                    align="left"
                    style={{
                      fontWeight: 10,
                      color: "#7D7D7D",
                    }}
                  >
                    Bring your Minamn to life with an Rental website.
                  </Typography>
                </Grid>

                {/* Card One Body */}
                <Grid container xs={12} spacing={2} style={classes.cardOneBody}>
                  <Grid item xs={6}>
                    <div>
                      <Typography
                        align="left"
                        style={classes.secondaryContainers}
                      >
                        CONSTRUCTION
                      </Typography>
                      <Typography
                        align="left"
                        style={{
                          fontWeight: 10,
                          color: "#7D7D7D",
                          paddingTop: 10,
                        }}
                      >
                        Bring your Minamn to life with an Rental website. Bring
                        your Minamn to life with an Rental website.
                      </Typography>
                    </div>
                    <div
                      style={{
                        paddingTop: 30,
                      }}
                    >
                      <Typography
                        align="left"
                        style={classes.secondaryContainers}
                      >
                        Luxury
                      </Typography>
                      <Typography
                        align="left"
                        style={{
                          fontWeight: 10,
                          color: "#7D7D7D",
                          paddingTop: 10,
                        }}
                      >
                        Bring your Minamn to life with an Rental website. Bring
                        your Minamn to life with an Rental website.
                      </Typography>
                    </div>
                    <div
                      style={{
                        paddingTop: 30,
                      }}
                    >
                      <Typography
                        align="left"
                        style={classes.secondaryContainers}
                      >
                        BASIC
                      </Typography>
                      <Typography
                        align="left"
                        style={{
                          fontWeight: 10,
                          color: "#7D7D7D",
                          paddingTop: 10,
                        }}
                      >
                        Bring your Minamn to life with an Rental website. Bring
                        your Minamn to life with an Rental website.
                      </Typography>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    display="flex"
                    justify="flex-end"
                    style={{
                      marginTop: 30,
                    }}
                  >
                    <img style={classes.CarImage2} src={homeImage} alt="" />
                  </Grid>
                </Grid>
                <Grid xs={12} container display="flex" justify="flex-end">
                  <Button>
                    <Typography variant="caption">
                      see more about Service Sharing
                    </Typography>
                    <ArrowRightAltIcon />
                  </Button>
                </Grid>
              </Box>
            </Grid>

            <Grid item xs={6} align="center">
              <Box style={classes.carsother}>
                <Grid item xs={12}>
                  <Typography align="left" style={classes.secondaryContainers}>
                    DIGITAL SHARING :
                  </Typography>
                </Grid>
                <Grid xs={12}>
                  <Typography align="left" style={classes.secondaryContainers1}>
                    Looking For a time Away? We Got Just the thing For You!!
                  </Typography>
                  <Typography
                    align="left"
                    style={{
                      fontWeight: 10,
                      color: "#7D7D7D",
                    }}
                  >
                    Bring your Minamn to life with an Rental website.
                  </Typography>
                </Grid>
                {/* Card One Body */}
                <Grid container xs={12} spacing={2} style={classes.cardOneBody}>
                  <Grid item xs={6}>
                    <div>
                      <Typography
                        align="left"
                        style={classes.secondaryContainers}
                      >
                        CONSTRUCTION
                      </Typography>
                      <Typography
                        align="left"
                        style={{
                          fontWeight: 10,
                          color: "#7D7D7D",
                          paddingTop: 10,
                        }}
                      >
                        Bring your Minamn to life with an Rental website. Bring
                        your Minamn to life with an Rental website.
                      </Typography>
                    </div>
                    <div
                      style={{
                        paddingTop: 30,
                      }}
                    >
                      <Typography
                        align="left"
                        style={classes.secondaryContainers}
                      >
                        Luxury
                      </Typography>
                      <Typography
                        align="left"
                        style={{
                          fontWeight: 10,
                          color: "#7D7D7D",
                          paddingTop: 10,
                        }}
                      >
                        Bring your Minamn to life with an Rental website. Bring
                        your Minamn to life with an Rental website.
                      </Typography>
                    </div>
                    <div
                      style={{
                        paddingTop: 30,
                      }}
                    >
                      <Typography
                        align="left"
                        style={classes.secondaryContainers}
                      >
                        BASIC
                      </Typography>
                      <Typography
                        align="left"
                        style={{
                          fontWeight: 10,
                          color: "#7D7D7D",
                          paddingTop: 10,
                        }}
                      >
                        Bring your Minamn to life with an Rental website. Bring
                        your Minamn to life with an Rental website.
                      </Typography>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    display="flex"
                    justify="flex-end"
                    style={{
                      marginTop: 30,
                    }}
                  >
                    <img style={classes.CarImage2} src={Boat} alt="" />
                  </Grid>
                </Grid>
                <Grid xs={12} container display="flex" justify="flex-end">
                  <Button>
                    <Typography variant="caption">
                      See More ABOUT digital sharing
                    </Typography>
                    <ArrowRightAltIcon />
                  </Button>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Grid xs={12} align="center">
          <IconButton>
            <MoreHorizIcon style={classes.threeDots} />
          </IconButton>
        </Grid>
        <Box style={classes.footerLayer}>
          <Grid
            xs={12}
            style={{
              marginLeft: 450,
              marginRight: 450,
              paddingBottom: 20,
            }}
            align="center"
          >
            <Typography
              style={{
                color: "#7D7D7D",
                fontSize: 20,
              }}
            >
              Explore How <b>Sharreit</b> can help you do more with the items
              you Share --- No matter what you Share
            </Typography>
          </Grid>
          <Grid container xs={12} spacing={10} display="flex" justify="center">
            <Grid item>
              <Button style={classes.footerLayerText}>
                <Grid container>
                  <Grid item>Share Vehicles</Grid>
                  <Grid item style={classes.expand}>
                    <ExpandMoreIcon fontSize="small" />
                  </Grid>
                </Grid>
              </Button>
            </Grid>

            <Grid item>
              <Button style={classes.footerLayerText}>
                <Grid container>
                  <Grid item>Share Boats</Grid>
                  <Grid item style={classes.expand}>
                    <ExpandMoreIcon fontSize="small" />
                  </Grid>
                </Grid>
              </Button>
            </Grid>

            <Grid item>
              <Button style={classes.footerLayerText}>
                <Grid container>
                  <Grid item>Share Apartments</Grid>
                  <Grid item style={classes.expand}>
                    <ExpandMoreIcon fontSize="small" />
                  </Grid>
                </Grid>
              </Button>
            </Grid>

            <Grid item>
              <Button style={classes.footerLayerText}>
                <Grid container>
                  <Grid item>Share Clothings</Grid>
                  <Grid item style={classes.expand}>
                    <ExpandMoreIcon fontSize="small" />
                  </Grid>
                </Grid>
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Grid xs={12}>
          <Box style={classes.FooterContainer}>
            <Grid container spacing={3}>
              <Grid item>
                <Button size="small" style={classes.footerText1}>
                  About Us
                </Button>
              </Grid>
              <Grid item>
                <Button size="small" style={classes.footerText1}>
                  Terms And Conditions
                </Button>
              </Grid>
              <Grid item>
                <Button size="small" style={classes.footerText1}>
                  Contact Us
                </Button>
              </Grid>
              <Grid item>
                <Button size="small" style={classes.footerText1}>
                  Need Help?
                </Button>
              </Grid>
            </Grid>
            <Divider style={{ backgroundColor: "#FFFFFF" }}></Divider>
          </Box>
        </Grid>
      </>
    );
  }
}
export default LandingPage;
