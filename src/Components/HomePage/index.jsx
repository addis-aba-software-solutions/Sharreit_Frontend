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
import AllItems from "./components/itemView"
import classes from './styles'
import { fetchAllItems } from "./functions/fetchItems"
import fetchItemsByCategory from "../ViewAllItems/functions/fetchItemsBySubCategory"
import { statusCodes } from "../../Config/config"
import PreLoaders from "../ViewAllItems/components/itemsView"
import preLoaderImage from "../../Assets/circle_loading_1.gif"
import { subCategories } from "./data"

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

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const preLoaders = (amount) => {
    const loadingContent = Array(amount).fill("").map(item => (
      <AllItems picture={preLoaderImage} title={"Loading"} price="" />
    )) 
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        {loadingContent}
      </div>
    )
  }

  const waitingContent = preLoaders(5)

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
        <Button style={classes.Headertext2}>
          <Grid item>service Sharing</Grid>
        </Button>
        <Button style={classes.Headertext2}>
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
        <div style={classes.popover}>
          {subCategories["Product Sharing"].map(item => (
            <div style={{ width: "100%", padding: 10 }}>{item}</div>
          ))}
        </div>
      </Popover>
    </>
  )
}
