import React from "react";
import { Typography, Paper, Box, Grid, List } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import fetchItemsBySubCategory from '../functions/fetchItems'
import { fetchAllItems } from '../functions/fetchItems'
import { statusCodes } from '../../../Config/config'
import preLoader from '../../../Assets/circle_loading_1.gif'
import routes from '../../../Config/routes'

const classes = {
  root: {
    paddingLeft: 30,
    paddingRight: 30,
    maxHeight: 860,
    overflow: "hidden",
    flexWrap: "wrap",
    maxWidth: "150%"
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

export default class ItemsView extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      waitingContent: [],
      content: [],
      fetchedCategories: false,
      subCategory: null
    }

    this.preLoaders = this.preLoaders.bind(this)
    this.mappedItems = this.mapItems.bind(this)
    this.gotoSingleItem = this.gotoSingleItem.bind(this)
  }

  gotoSingleItem(id) {
    this.props.history.push({
      pathname: routes.singleItem,
      state: { id, category: this.props.category, subCategory: this.props.subCategory },
    })
  }

  async componentDidMount() {
    if (this.props.category.length === 0) {
      this.setState({ waitingContent: this.preLoaders() })
      const { status, data } = await fetchAllItems()
      if (status === statusCodes.SUCCESS) {
        const { posts } = data
        this.mapItems(posts)
      }
    }
  }

  async componentDidUpdate () {
    if (this.props.category.length > 0 && this.props.subCategory !== this.state.subCategory) {
      if (!this.props.fetchedCategories) {
        const { status, data } = await fetchItemsBySubCategory(this.props.category, this.props.subCategory)
        if (status === statusCodes.SUCCESS) {
          this.setState({ loading: true })
          this.setState({ fetchedCategories: true, subCategory: this.props.subCategory })
          const { posts } = data
          this.mapItems(posts)
        }
      }
    }
  }

  preLoaders = () => {
    const loader = (
      <Grid item>
        <Card style={classes.card}>
          <CardActionArea>
            <CardMedia style={classes.media} image={preLoader} title="" />
            <CardContent>
              <Typography style={classes.cardTitle}>
                Loading...
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    )

    return Array(4).fill(loader)
  }

  mapItems = (items) => {
    this.setState({ loading: true })
    var mappedItems = []
    items.forEach((value, index) => {
      var { post, id } = value
      if (post.postImage.length > 0) {
        mappedItems.push(
          <Grid item>
            <Card style={classes.card}
              onClick={() => this.gotoSingleItem(id)}
            >
              <CardActionArea>
                <CardMedia style={classes.media} image={post.postImage[0]} title="" />
                <CardContent>
                  <Typography style={classes.cardTitle}>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {post.price}$/Day
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {post.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        )
      }
    })
    this.setState({ loading: false })
    this.setState({ content: mappedItems })
  }

  render() {
    return (
      <Box style={classes.root}>
        <List>
          {
            this.state.content.length && !this.state.loading === 0? ( <Typography variant="h4">No items in this category</Typography> ) : (
            <Grid container xs={12} spacing={5}>
              {this.state.loading? this.state.waitingContent : this.state.content}
            </Grid>
            )
          }
        </List>
      </Box>
    );
  }
}
