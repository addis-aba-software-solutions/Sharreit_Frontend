import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import GrainIcon from "@material-ui/icons/Grain";

const classes ={
    link: {
        display: "flex",
        color: "#000000",
        paddingBottom: 30,
        height: 40,
      },
      icon: {
        marginRight: 10,
        width: 40,
        height: 40,
      },
};

function handleClick(event) {
  event.preventDefault();
  alert("clicked");
}

export default function IconBreadcrumbs() {

  return (
    <Breadcrumbs aria-label="breadcrumb">
    <Link color="inherit" href="/" onClick={handleClick} style={classes.link}>
      <HomeIcon style={classes.icon} />
      Some Category Goes Here
    </Link>
    <Link
      color="inherit"
      onClick={handleClick}
      style={classes.link}
    >
      <WhatshotIcon style={classes.icon} />
      Some Category Goes Here

    </Link>
    <Typography color="textPrimary" style={classes.link}>
      <GrainIcon style={classes.icon} />
      Some Category Goes Here

    </Typography>
  </Breadcrumbs>
  );
}
