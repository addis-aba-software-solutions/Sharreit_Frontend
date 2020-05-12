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
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AnimatedButtons from "./animated-buttons";
import routes from "../../Config/routes";
import keys from "../../Config/keys";
import logout from "../Headers&Footers/functions/logout";
import ticket from "../../Assets/ticket.jpg";
import nanny from "../../Assets/nanny.jpg";
import HomePageHeader from "../HomePage/components/HomePageHeader";

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = { animationStart: false, name: "" };
    this.goodBye = this.goodBye.bind(this);
  }

  goodBye() {
    const response = logout();
    if (response) {
      this.setState({ name: "" });
      this.props.history.push(routes.root);
    }
  }

  routeChange() {
    this.props.history.push(routes.signIn);
  }

  gotoCategory(type) {
    this.props.history.push({
      pathname: routes.category,
      state: { type },
    });
  }

  render() {
    return (
      <>
        <Box style={classes.root}>
          <AppBar>
            <HomePageHeader history={this.props.history} />
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
                Share
              </Typography>
              <Typography style={classes.body_OneEverything} align="left">
                everything
              </Typography>
              <Typography style={classes.body_Two} align="left">
                One Platform that lets you Share Whatever you have Whenever is
                inquired,
              </Typography>
              <Grid style={classes.body_Three} container xs={12}>
                <Grid xs={5}>
                  <Typography align="left" style={classes.body_Three_Header}>
                    Trust-Worthy
                  </Typography>
                  <Typography
                    align="left"
                    variant="body2"
                    style={classes.body_Three_Body}
                  >
                    Sharreit makes sure that all the items you share are to be
                    returned in the same condition it left
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
                    Beautiful Layout
                  </Typography>
                  <Typography
                    align="left"
                    variant="body2"
                    style={classes.body_Three_Body}
                  >
                    Sharreit is a sharing website with an easy to use user
                    interface, making your experience more enjoyable while
                    browsing
                  </Typography>
                </Grid>
              </Grid>
              <Grid style={classes.body_Three} container xs={12}>
                <Grid xs={5}>
                  <Typography align="left" style={classes.body_Three_Header}>
                    Security
                  </Typography>
                  <Typography
                    align="left"
                    variant="body2"
                    style={classes.body_Three_Body}
                  >
                    We Care about your products on bahalf of you, So whatever
                    you share, the person that's acquiring the item is fully
                    responsible for the item.
                  </Typography>
                </Grid>
                <Grid
                  xs={5}
                  style={{
                    paddingLeft: 80,
                  }}
                >
                  <Typography align="left" style={classes.body_Three_Header}>
                    24/7
                  </Typography>
                  <Typography
                    align="left"
                    variant="body2"
                    style={classes.body_Three_Body}
                  >
                    Unruled by timing or Quarentine , Shareit helps you rent
                    your items beforehand your meetup,
                  </Typography>
                </Grid>
              </Grid>
              <Grid style={classes.body_Three} container xs={12}>
                <Grid xs={5}>
                  <Typography align="left" style={classes.body_Three_Header}>
                    Chatting
                  </Typography>
                  <Typography
                    align="left"
                    variant="body2"
                    style={classes.body_Three_Body}
                  >
                    Browse Through Our Store to find what you’re looking for and
                    click "Contact supplier", One Step Easier to get an item
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
          <Grid item xs={3} align="center">
            <Typography
              style={{
                fontWeight: 600,
                fontSize: 24,
              }}
            >
              Most Shared Products/Services
            </Typography>
            <AnimatedButtons start={true} amount={4} />
          </Grid>

          <Grid item xs={8} align="left">
            <Box style={classes.cars}>
              <Grid item xs={12}>
                <Typography align="left" style={classes.secondaryContainers}>
                  PRODUCT SHARING
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
                  Bring your Finances to life with Sharreit.
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
                      Do you Have any books lying around?? why not make Profit
                      out of it
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
                      Are you the Hiker type? or do you like Campings?? Sharreit
                      got the thing for you!
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
                      Farming Equipments that could enhance your productivity
                      and decrease your labor, We GOT the tools.
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
                <Button  variant='contained' style={{backgroundColor: '#1081D1', color: '#FFFFFF'}} onClick={() => this.gotoCategory(0)}>
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
                    SERVICE SHARING
                  </Typography>
                </Grid>
                <Grid xs={12}>
                  <Typography align="left" style={classes.secondaryContainers1}>
                    Advertize your Skills on Sharreit, Get People to hire you!
                  </Typography>
                  <Typography
                    align="left"
                    style={{
                      fontWeight: 10,
                      color: "#7D7D7D",
                    }}
                  >
                    Get or Provide Services from or to your house.
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
                        NANNY
                      </Typography>
                      <Typography
                        align="left"
                        style={{
                          fontWeight: 10,
                          color: "#7D7D7D",
                          paddingTop: 10,
                        }}
                      >
                        exhausted? do you need someone to take care of your
                        kids?? Hire a Nanny
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
                        MUSIC TEACHER
                      </Typography>
                      <Typography
                        align="left"
                        style={{
                          fontWeight: 10,
                          color: "#7D7D7D",
                          paddingTop: 10,
                        }}
                      >
                        Want a skill you never had?? or maybe thinking of
                        improving your musical skills?? we know people that are
                        willing to teach you!
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
                        TUTOR
                      </Typography>
                      <Typography
                        align="left"
                        style={{
                          fontWeight: 10,
                          color: "#7D7D7D",
                          paddingTop: 10,
                        }}
                      >
                        Have Kids that are home schooled? Do you need A tutor?
                        from languages to Academic Studies?
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
                    <img style={classes.CarImage2} src={nanny} alt="" />
                  </Grid>
                </Grid>
                <Grid xs={12} container display="flex" justify="flex-end">
                  <Button  variant='contained' style={{backgroundColor: '#1081D1', color: '#FFFFFF'}} onClick={() => this.gotoCategory(1)}>
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
                    DIGITAL SHARING
                  </Typography>
                </Grid>
                <Grid xs={12}>
                  <Typography align="left" style={classes.secondaryContainers1}>
                    Creating innovations that leverage digital solutions, such as the Internet or mobile phones, to engage communities.
                  </Typography>
                  <Typography
                    align="left"
                    style={{
                      fontWeight: 10,
                      color: "#7D7D7D",
                    }}
                  >
                   Sharing assets - physical, financial, and/or human capital -  
                    between many, without transferring ownership, via a digital platform
                    to create economic value for at least two parties.
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
                        Season Tickets
                      </Typography>
                      <Typography
                        align="left"
                        style={{
                          fontWeight: 10,
                          color: "#7D7D7D",
                          paddingTop: 10,
                        }}
                      >
                        Share your season tickets with your friends, collegues and loved ones.
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
                        Streaming Accounts
                      </Typography>
                      <Typography
                        align="left"
                        style={{
                          fontWeight: 10,
                          color: "#7D7D7D",
                          paddingTop: 10,
                        }}
                      >
                        Share your online streaming accounts with your friends and watch your shows together.
                      </Typography>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    display="flex"
                    justify="flex-end"
                    style={{
                      marginTop: 30
                    }}
                  >
                    <img style={classes.CarImage2} src={ticket} alt="" />
                  </Grid>
                </Grid>
                <Grid xs={12} container display="flex" justify="flex-end">
                  <Button variant='contained' style={{backgroundColor: '#1081D1', color: '#FFFFFF'}} onClick={() => this.gotoCategory(2)} >
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
                  <Grid item>Share Products</Grid>
                  <Grid item style={classes.expand}>
                    <ExpandMoreIcon fontSize="small" />
                  </Grid>
                </Grid>
              </Button>
            </Grid>

            <Grid item>
              <Button style={classes.footerLayerText}>
                <Grid container>
                  <Grid item>Share Services</Grid>
                  <Grid item style={classes.expand}>
                    <ExpandMoreIcon fontSize="small" />
                  </Grid>
                </Grid>
              </Button>
            </Grid>

            <Grid item>
              <Button style={classes.footerLayerText}>
                <Grid container>
                  <Grid item>Share Digital Equipments</Grid>
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
