import { easings } from "react-animation";

const classes = {
  root: {
    backgroundColor: "#F3FCF4",
    marginLeft: 20,
    height: '100vh',
    marginRight: 20,
    padding: 15,
  },

  Headertext1: {
    color: "#42474C",
    marginTop: 5,
    fontSize: 25,
    fontWeight: 600,

    spacing: 2,
  },
  Headertext2: {
    color: "#42474C",
    marginTop: 5,
    fontSize: 25,
    fontWeight: 40,
    spacing: 2,
  },

  scrollWrapper: {
    overflowX: "hidden",
    overflowY: "hidden",
    whiteSpace: "nowrap",
    width: "100%",
    scrollBehavior: "smooth",
  },

  card: {
    display: "inline-block",
    margin: 10,
  },
  link: {
    display: "flex",
    color: "#004C3F",
    paddingBottom: 30,
    height: 40,
  },
  icon: {
    marginRight: 10,
    width: 40,
    height: 40,
  },
};

export default classes;
