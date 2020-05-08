import React from "react";
import { Typography, Paper, Box, Grid, List } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import image from "../../../Assets/Rental_house.jpg";
import image2 from "../../../Assets/Rentalhouse.jpg";
import image3 from "../../../Assets/SomeCar.jpg";
import routes from "../../../Config/routes";

const classes = {
  root: {
    paddingLeft: 30,
    paddingRight: 30,
    maxHeight: 860,
    overflow: "auto",

    // backgroundColor: '#FFFFFF'
  },
  card: {
    padding: 10,
    maxWidth: 260,
    minWidth: 260,
    borderRadius: 10,
    minHeight: 230,
    maxHeight: 240,
  },
  media: {
    height: 140,
    borderRadius: 10,
  },
  cardTitle: {
    fontWeight: 600,
    color: "#004C3F",
    fontSize: 15,
  },
  cardBody: {
    fontSize: 15,
  },
};

export default function ItemsView() {
  return (
    <Box style={classes.root}>
      <List>
      <Grid container xs={12} spacing={5}>
        <Grid item>
          <Card style={classes.card}>
            <CardActionArea>
              <CardMedia style={classes.media} image={image} title="" />
              <CardContent>
                <Typography style={classes.cardTitle}>
                  House For Rentas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  60$/Day
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <b>Share Count :</b> 87
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card style={classes.card}>
            <CardActionArea>
              <CardMedia style={classes.media} image={image} title="" />
              <CardContent>
                <Typography style={classes.cardTitle}>
                  House For Rentas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  60$/Day
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <b>Share Count :</b> 87
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card style={classes.card}>
            <CardActionArea>
              <CardMedia style={classes.media} image={image} title="" />
              <CardContent>
                <Typography style={classes.cardTitle}>
                  House For Rentas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  60$/Day
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <b>Share Count :</b> 87
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card style={classes.card}>
            <CardActionArea>
              <CardMedia style={classes.media} image={image} title="" />
              <CardContent>
                <Typography style={classes.cardTitle}>
                  House For Rentas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  60$/Day
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <b>Share Count :</b> 87
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card style={classes.card}>
            <CardActionArea>
              <CardMedia style={classes.media} image={image} title="" />
              <CardContent>
                <Typography style={classes.cardTitle}>
                  House For Rentas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  60$/Day
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <b>Share Count :</b> 87
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item>
          <Card style={classes.card}>
            <CardActionArea>
              <CardMedia style={classes.media} image={image2} title="" />
              <CardContent>
                <Typography style={classes.cardTitle}>
                  House For Rentas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  60$/Day
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <b>Share Count :</b> 87
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item>
          <Card style={classes.card}>
            <CardActionArea>
              <CardMedia style={classes.media} image={image} title="" />
              <CardContent>
                <Typography style={classes.cardTitle}>
                  House For Rentas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  60$/Day
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <b>Share Count :</b> 87
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item>
          <Card style={classes.card}>
            <CardActionArea>
              <CardMedia style={classes.media} image={image2} title="" />
              <CardContent>
                <Typography style={classes.cardTitle}>
                  House For Rentas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  60$/Day
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <b>Share Count :</b> 87
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item>
          <Card style={classes.card}>
            <CardActionArea>
              <CardMedia style={classes.media} image={image3} title="" />
              <CardContent>
                <Typography style={classes.cardTitle}>
                  House For Rentas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  60$/Day
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <b>Share Count :</b> 87
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card style={classes.card}>
            <CardActionArea>
              <CardMedia style={classes.media} image={image3} title="" />
              <CardContent>
                <Typography style={classes.cardTitle}>
                  House For Rentas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  60$/Day
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <b>Share Count :</b> 87
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card style={classes.card}>
            <CardActionArea>
              <CardMedia style={classes.media} image={image3} title="" />
              <CardContent>
                <Typography style={classes.cardTitle}>
                  House For Rentas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  60$/Day
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <b>Share Count :</b> 87
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card style={classes.card}>
            <CardActionArea>
              <CardMedia style={classes.media} image={image3} title="" />
              <CardContent>
                <Typography style={classes.cardTitle}>
                  House For Rentas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  60$/Day
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <b>Share Count :</b> 87
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card style={classes.card}>
            <CardActionArea>
              <CardMedia style={classes.media} image={image3} title="" />
              <CardContent>
                <Typography style={classes.cardTitle}>
                  House For Rentas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  60$/Day
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <b>Share Count :</b> 87
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card style={classes.card}>
            <CardActionArea>
              <CardMedia style={classes.media} image={image3} title="" />
              <CardContent>
                <Typography style={classes.cardTitle}>
                  House For Rentas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  60$/Day
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <b>Share Count :</b> 87
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card style={classes.card}>
            <CardActionArea>
              <CardMedia style={classes.media} image={image3} title="" />
              <CardContent>
                <Typography style={classes.cardTitle}>
                  House For Rentas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  60$/Day
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <b>Share Count :</b> 87
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card style={classes.card}>
            <CardActionArea>
              <CardMedia style={classes.media} image={image3} title="" />
              <CardContent>
                <Typography style={classes.cardTitle}>
                  House For Rentas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  60$/Day
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <b>Share Count :</b> 87
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card style={classes.card}>
            <CardActionArea>
              <CardMedia style={classes.media} image={image3} title="" />
              <CardContent>
                <Typography style={classes.cardTitle}>
                  House For Rentas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  60$/Day
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <b>Share Count :</b> 87
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card style={classes.card}>
            <CardActionArea>
              <CardMedia style={classes.media} image={image3} title="" />
              <CardContent>
                <Typography style={classes.cardTitle}>
                  House For Rentas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  60$/Day
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <b>Share Count :</b> 87
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card style={classes.card}>
            <CardActionArea>
              <CardMedia style={classes.media} image={image3} title="" />
              <CardContent>
                <Typography style={classes.cardTitle}>
                  House For Rentas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  60$/Day
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <b>Share Count :</b> 87
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card style={classes.card}>
            <CardActionArea>
              <CardMedia style={classes.media} image={image3} title="" />
              <CardContent>
                <Typography style={classes.cardTitle}>
                  House For Rentas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  60$/Day
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <b>Share Count :</b> 87
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card style={classes.card}>
            <CardActionArea>
              <CardMedia style={classes.media} image={image3} title="" />
              <CardContent>
                <Typography style={classes.cardTitle}>
                  House For Rentas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  60$/Day
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <b>Share Count :</b> 87
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

      </Grid>
      </List>
    </Box>
  );
}
