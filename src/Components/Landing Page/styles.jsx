import { easings } from "react-animation";

import homeImage from "../../Assets/Rentalhouse.jpg";

const classes = {
  root: {
    height: 'auto',
  },
  footerLayer: {
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#D6DADC",
    padding: 15,
    height: "auto",
  },
  container: {
    // paddingLeft: 30,
    paddingRight: 30,
  },
  button: {
    color: "#1081D1",
    backgroundColor: "#FFFFFF",
    padding: 10,
    paddingLeft: 40,
    paddingRight: 40
  },
  Headertext2: {
    color: "#FFFFFF",
    marginTop: 5,
    fontSize: 13,
    fontWeight: 20,
    spacing: 2,
  },
  Headertext1: {
    color: "#FFFFFF",
    marginTop: 5,
    fontSize: 13,
    fontWeight: 40,
    spacing: 2,
  },
  ShareAppPadding: {
    marginLeft: 60,
  },
  expand: {
    color: "#FFFFFF",
  },
  body_One: {
    fontSize: 50,
    color: "#1081D1",
    fontWeight: 1000,
    paddingLeft: 100,
    animation: `pop-in ${easings.easeInOutBack} 2000ms forwards`,
  },
  body_OneEverything: {
    animation: `pop-in ${easings.easeInOutBack} 2500ms forwards`,

    fontSize: 50,
    color: "#083991",
    fontWeight: 1000,
    paddingLeft: 100,
  },
  // color: "#004C3F",

  body_Two: {
    animation: `pop-in ${easings.easeInOutSine} 3000ms forwards`,

    paddingTop: 30,
    fontSize: 25,
    color: "#7D7D7D",
    fontWeight: 2,
    paddingLeft: 100,
  },
  body_Three: {
    fontSize: 25,
    color: "#7D7D7D",
    fontWeight: 10,
    marginRight: 20,
    marginLeft: 20,
    paddingLeft: 80,
    paddingTop: 80,
  },

  CarImage: {
    height: 510,
    borderRadius: 5,
    animation: `slide-in 3000ms cubic-bezier(0.19, 1, 0.22, 1) forwards`,
  },
  CarImage2: {
    animation: `pop-in ${easings.easeInOutBack} 2000ms forwards`,
    height: 250,
    borderRadius: 5,
    paddingTop: 20,
    shadowOpacity: 9,
    elevation: 10,
    backgroundColor: "#1081D1",
  },
  body_Three_Header: {
    color: "#1081D1",
    fontSize: 18,
    animation: `pop-in ${easings.easeInOutBack} 1000ms forwards`,
  },
  body_Three_Body: {
    animation: `pop-in ${easings.easeInOutBack} 1500ms forwards`,
  },
  LastImage: {
    backgroundImage: `url(${homeImage})`,
    height: 300,
    borderRadius: 5,
    animation: `pop-in ${easings.easeOutExpo} 5000ms forwards`,
  },
  cars: {
    animation: `pop-in ${easings.easeOutExpo} 2000ms forwards`,
    height: "auto",
    width: 550,
    marginLeft: 615,
    marginRight: 500,
    borderRadius: 5,
    backgroundColor: "#FFF8F6",
    padding: 30,
  },
  spacing: {
    marginTop: 10,
    marginBottom: 10,
  },
  cardContainer: {
    padding: 20,
  },
  secondaryContainers: {
    color: "#7D7D7D",
    fontWeight: 2,
  },
  secondaryContainers1: {
    color: "#7D7D7D",
    paddingTop: 10,
    fontWeight: 10,
    fontSize: 28,
    paddingBottom: 10,
  },
  cardOneBody: {
    paddingTop: 30,
  },
  carsother: {
    // animation: animations.slideIn,
    animation: `pop-in ${easings.easeOutExpo} 2000ms forwards`,
    height: 700,

    width: 550,
    marginBottom: 100,
    borderRadius: 5,
    backgroundColor: "#EFFCFA",
    padding: 30,
  },
  threeDots: {
    fontSize: 50,
  },
  spacer: {
    fontSize: 50,
    marginBottom: 40,
    color: "#7D7D7D",
    animation: `pop-in ${easings.easeOutExpo} 2000ms forwards`,
  },
  FooterContainer: {
    backgroundColor: "#002E25",
    height: "auto",
    padding: 30,
  },
  footerText1: {
    color: "#FFFFFF",
    padding: 5,
  },
  footerLayerText: {
    color: "#002E25",
    fontWeight: 600,
  },
  Logo: {
    height: 50,
    width: 100,
    marginTop: 20,
    marginLeft: 80
  },

  user_name: {
    color: "#000",
    marginTop: 11,
  },
};

export default classes;
