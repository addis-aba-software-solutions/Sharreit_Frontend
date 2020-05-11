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
    width: 1000,
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
    transitions: theme.transitions.create(["width", "height"], {
      easing: theme.transitions.easing.easeInOut,
      duration: "1000ms",
    }),
  },

  sideCaption: {
    width: 3000,
    height: 100,
    background: "#FFF8F6",
    marginLeft: 20,
    marginBottom: 12,
    borderRadius: 12,
    paddingLeft: 10,
    paddingTop: 15,
  },
  large: {
    width: 80,
    height: 80,
  },
}));
