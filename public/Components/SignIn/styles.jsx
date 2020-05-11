import { easings } from "react-animation";
import { makeStyles } from "@material-ui/core/styles";
import houseImage from "../../Assets/Rentalhouse.jpg";

export default makeStyles((theme) => ({
  root: {
    height: "100vh",
    marginRight: 300,
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
    // margin: theme.spacing(8, 4),
    margin: 100,
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
    color: "#008060",
  },
  submit: {
    backgroundColor: "#008060",
    color: "#FFFFFF",
    margin: theme.spacing(3, 0, 2),
  },
  Logo: {
    height: 200,
    width: 450,
    animation: `fade-in ${easings.easeOutQuart} 5000ms forwards`,
  },
  paperContainer: {
    backgroundColor: "#F3FCF4",
  },
  checkbox: {
    marginLeft: 20,
  },
  primary: {
    color: "#008060",
  },
  FormHelperText: {
    marginLeft: 100,
  },

  loading: {
    margin: 20,
    fontWeight: 600
  }

}));
