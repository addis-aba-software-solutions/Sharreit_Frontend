import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Image from "../../../Assets/bulldozer.jpg";

const useStyles = makeStyles({
  root: {
    width: 345,
    padding: 5,
  },
  media: {
    height: 200,
  },
});

export default function MediaCard({ picture, title, price }) {
  const classes = useStyles();
  
  React.useState(() => {
    if (typeof title === "string")
      console.log(title)
  }, [title])
  
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={picture}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {
              price.length > 0 ? "Price/Day:" + price : ""
            }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {
              price.length > 0 ? "Rent Count: 300 Times" : "" 
            }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
