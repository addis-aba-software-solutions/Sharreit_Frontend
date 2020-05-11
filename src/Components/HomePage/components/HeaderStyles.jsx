import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "#1081D1",
  },
  Logo: {
    height: 70,
    width: 140,
  },
  LogoContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 7,
    //   marginRight: 1
  },
  searchContainer: {
    marginTop: 10,
  },
  search: {
    padding: 10,
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    justifyContent: "center",
    marginTop: 7,
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: 900,
  },
  appbarRightSide: {
    paddingLeft: 30,
    marginTop: 5,
  },
  Headertext2: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 600,
  },
  Headertext1: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 600,
  },
  HeaderSecondRow: {
    paddingTop: 20,
  },

  tt: {
      marginTop: 5
  },
}));

export default useStyles;
