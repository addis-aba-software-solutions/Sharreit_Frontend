import React from "react";
import {
  Typography,
  Box,
  Button,
  AppBar,
  Popover,
  Grid,
} from "@material-ui/core";
import HomePageHeader from "./components/HomePageHeader";
import ItemsView from "./components/itemsView"
import classes from './styles'
import { fetchAllItems } from "./functions/fetchItems"
import fetchItemsByCategory from "../ViewAllItems/functions/fetchItemsBySubCategory"
import { statusCodes } from "../../Config/config"
import PreLoaders from "../ViewAllItems/components/itemsView"
import preLoaderImage from "../../Assets/circle_loading_1.gif"
import AllItems from "./components/itemView";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { ListItemIcon, ListItemText } from "@material-ui/core";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import routes from "../../Config/routes"
import { categories, subCategories } from "./data"

export default ({ history }) => {
  const [state, setState] = React.useState({
    category: "",
    subCategory: "",
    content: [],
    loaded: false,
  });

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (category) => {
    history.push({
      pathname: routes.category,
      state: { type: category, posts: state.content }
    })
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      })
    );
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [dense, setDense] = React.useState(false);

  return (
    <>
      <AppBar position="fixed">
        <HomePageHeader history={history} />
      </AppBar>
      <Box style={classes.bodySpacer} />

      <Grid item align='center' xs={12} align="center" style={classes.HeaderSecondRow}>
        <Button onClick={() => handleClick(0)} style={classes.Headertext2}>
          <Grid item>product Sharing</Grid>
        </Button>
        <Button onClick={() => handleClick(1)} style={classes.Headertext2}>
          <Grid item>service Sharing</Grid>
        </Button>
        <Button onClick={() => handleClick(2)} style={classes.Headertext2}>
          <Grid item>Digital Sharing</Grid>
        </Button>
      </Grid>

      <Box style={classes.root}>
        <ItemsView history={history} category={state.category} subCategory={state.subCategory} />
      </Box>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List dense={dense}>
          {subCategories[categories[0]].map((item, index) => (
            <ListItemText primary={item} key={index} style={classes.listItem} onClick={() => {
              setState({ ...state, category: categories[0], subCategory: item})
            }} />
          ))}
        </List>
      </Popover>
    </>
  );
};
