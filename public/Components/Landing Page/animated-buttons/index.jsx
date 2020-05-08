import React, { useEffect } from "react";
import { Grid, Zoom, Typography, Fade, Avatar } from "@material-ui/core";
import clsx from "clsx";
import useStyles from "./styles";
import image from "./img/download.jpg";
import { Visibility } from "@material-ui/icons";


const Example = ({ start, amount }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    cars: Array(amount).fill(false),
  });

  const [note, setNote] = React.useState({
    sideNotes: Array(amount).fill(false),
  });

  const MAX_BUBBLES = state.cars.length;
  var counter = 0;

  useEffect(() => {
    if (!start) {
      return;
    } else if (state.cars[0]) {
      return;
    }
    startAnimation();
  });

  const startAnimation = () => {
    var { cars } = state;
    cars[counter] = !cars[counter];
    setState({ cars });
    if (MAX_BUBBLES > counter + 1) {
      counter++;
      setTimeout(startAnimation, 500);
    }
  };

  const openSideNote = (index) => {
    var { sideNotes } = note;
    sideNotes[index] = true;
    setNote({ sideNotes });
  };

  const closeSideNote = (index) => {
    var { sideNotes } = note;
    sideNotes[index] = false;
    setNote({ sideNotes });
  };
  
  return (
    <Grid className={classes.root} container>
      <Grid item xs={12} className={classes.root}>
        {state.cars.map((item, index) => (
          <Grid item xs={12} key={index}>
            <div
              onMouseEnter={() => openSideNote(index)}
              onMouseLeave={() => closeSideNote(index)}
              className={classes.container}
            >
              <Zoom in={state.cars[index]} timeout={2000}>
                
                {/* <Avatar
                src={image} className={classes.animated}
                >

                </Avatar> */}
                <Avatar alt="Remy Sharp" src={image} className={classes.large} />
                {/* <Visibility fontSize='large' style={{
                  marginTop: 45
                }}/> */}
                {/* <img src={image} className={classes.animated} alt="Car" /> */}
              </Zoom>
              <Fade in={note.sideNotes[index]} timeout={900}>
                <div className={classes.sideCaption}>
                  <Typography variant="h6">Volkswaggen</Typography>
                  <p>
                    The amazing family car that will take you anywhere you want,
                    and something something.
                  </p>
                </div>
              </Fade>
            </div>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Example;
