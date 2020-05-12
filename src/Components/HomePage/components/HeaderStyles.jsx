import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "#F3FCF4",

    paddingBottom: 20,
  },
  Logo: {
    height: 70,
    width: 140,
  },
  LogoContainer: {
    borderRadius: 7,
    //   marginRight: 1
  },
  searchContainer: {
    marginTop: 10,
  },
  search: {
    padding: 10,
    position: "relative",
    borderRadius: 20,
    backgroundColor: "#D1D8DD",
    "&:hover": {
      backgroundColor: "#FFFFFF",
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
    color: "#7d7d7d",
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
    display: "flex",
    justifyContent: "flex-end",
    marginRight: 5,
    //paddingRight: 40,
    //marginTop: 1,
    //padding: 2,
  },
  Headertext2: {
    color: "#1081D1",
    fontSize: 16,
    paddingLeft: 40,
    paddingRight: 40,
  },
  Headertext1: {
    color: "#1081D1",
    fontSize: 14,
    fontWeight: 600,
  },
  tt: {
    marginTop: 5,
  },
  
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

}));

export default useStyles;
