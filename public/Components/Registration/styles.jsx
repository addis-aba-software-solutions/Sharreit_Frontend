import { makeStyles } from "@material-ui/core";
import houseImage from "../../Assets/Rentalhouse.jpg";
import { easings } from "react-animation";

export default makeStyles((theme) => ({
  container: {
    backgroundColor: "#F3FCF4",
  },
  root: {
    height: "100vh",
    marginRight: 300,
    backgroundColor: "#F3FCF4",
  },
  Logo: {
    height: 100,
    width: 225,
    animation: `fade-in ${easings.easeOutQuart} 5000ms forwards`,
  },
  stepper: {
    width: 800,
    backgroundColor: "#F3FCF4",
  },
  active: {
    color: "#008060",
  },
  paperContainer: {
    backgroundColor: "#F3FCF4",
  },
  image: {
    backgroundImage: `url(${houseImage})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
    animation: `pop-in ${easings.easeOutQuart} 1000ms forwards`,
  },
  paper: {
    marginLeft: 70,
    marginRight: 70,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#008060",
    height: 60,
    width: 60,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

  submit: {
    backgroundColor: "#008060",
    color: "#FFFFFF",
    margin: theme.spacing(3, 0, 2),
  },

  addressText: {
    fontSize: 20,
    fontWeight: 750,
  },
  minimalTextFields: {
    display: "flex",
    flexDirection: "row",
  },
  address_city: {
    marginRight: 20,
    width: 235,
  },
  address_state: {
    width: 243,
  },
  astrix: {
    color: "red",
    float: "right",
  },
  controlFields: {
    width: 223,
  },
  singularField: {
    marginTop: 15,
  },

  finalStepsContainer: {
    display: "flex",
    justifyContent: "center"
  },

  finalStepsForm: {
    display: "flex",
    flexDirection: "column"
  },

  finalStepsBirthDay: {
    marginTop: 20,
    marginBottom: 20
  }

}));
