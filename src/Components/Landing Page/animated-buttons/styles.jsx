import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 15,
    marginTop: 20,
  },

  container: {
    display: "flex",
    flexDirection: "row",
    width: 750,
  },

  animated: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 40,
    marginTop: 22,
  },

  hide: {
    display: "none",
  },

  displayCaption: {
    color: "#7D7D7D",
    paddingTop: 10,
    fontWeight: 10,
    fontSize: 28,
    paddingBottom: 10,
    transitions: theme.transitions.create(["width", "height"], {
      easing: theme.transitions.easing.easeInOut,
      duration: "1000ms",
    }),
  },

  secondaryContainers1: {
    color: "#7D7D7D",
    paddingTop: 10,
    fontWeight: 10,
    fontSize: 28,
    paddingBottom: 10,
  },

  sideCaption: {
    width: 2000,
    height: 100,
    background: "#FFF8F6",
    marginLeft: 20,
    marginBottom: 12,
    borderRadius: 12,
    paddingLeft: 10,
    paddingTop: 15,
    color: "#7D7D7D",
    paddingTop: 10,
    fontWeight: 10,
    fontSize: 18,
  },
  large: {
    width: 80,
    height: 80,
  },
}));
