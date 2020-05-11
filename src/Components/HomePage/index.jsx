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
import { subCategories } from "./data"
import AllItems from "./components/itemView";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { ListItemIcon, ListItemText } from "@material-ui/core";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

export default ({ history }) => {
  const [state, setState] = React.useState({
    category: "", subCategory: "", content: [], loaded: false
  })
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  React.useEffect(() => {
    setState({ ...state, loaded: false })
    const update = async () => {
      if (state.category.length > 0) {
        const { status, data } = await fetchItemsByCategory(state.category, state.subCategory)
        if (status === statusCodes.SUCCESS) {
          var { posts } = data
          const fetchedItems = posts.map((item, index) => (
              <AllItems id={item.id} title={item.post.title} picture={item.post.postImage[0]} price={item.post.price} key={index} />
          ))
          setState({ ...state, content: fetchedItems })
        }
      } else {
        const { status, data } = await fetchAllItems()
        if (status === statusCodes.SUCCESS) {
          var { posts } = data
          const fetchedItems = posts.map((item, index) => (
              <AllItems id={item.id} title={item.post.title} picture={item.post.postImage[0]} price={item.post.price} key={index} />
          ))
          setState({ ...state, content: fetchedItems })
        }
      }
    }
    update()
    console.log("updated")
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
        <HomePageHeader />
      </AppBar>
      <Box style={classes.bodySpacer} />

      <Grid xs={12} align="center" style={classes.HeaderSecondRow} spacing={5}>
        <Button onClick={handleClick} style={classes.Headertext2}>
          <Grid item>product Sharing</Grid>
        </Button>
        <Button onClick={handleClick} style={classes.Headertext2}>
          <Grid item>service Sharing</Grid>
        </Button>
        <Button onClick={handleClick} style={classes.Headertext2}>
          <Grid item>Digital Sharing</Grid>
        </Button>
      </Grid>

      <Box style={classes.root}>
        <ItemsView history={history} category={state.category} subCategory={state.subCategory} style={{ width: "150%" }} />
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
          {generate(
            <ListItem>
              <ListItemText primary="YOU LAZY ASS NIGGRO!!!" />
            </ListItem>
          )}
        </List>
      </Popover>
    </>
  )
}
