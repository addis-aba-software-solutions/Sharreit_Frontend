import React from "react";
import {
  Card,
  CardContent,
  Paper,
  IconButton,
  Typography,
  TextField,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
  Box,
  Button,
  Grid,
  Backdrop,
  CircularProgress,
  AppBar,
} from "@material-ui/core";
import { Add, Done } from "@material-ui/icons";
import useStyles from "./styles";
import { fields, options, categories, subCategories } from "./data";
import Header from "../Headers&Footers/Header";
import addItem from "./functions/addItem";
import { statusCodes } from "../../Config/config";
import routes from "../../Config/routes";
import HomePageHeader from "../HomePage/components/HomePageHeader";
import LoadingContent from "../LoadingContent";

const AddItem = ({ history }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    title: "",
    condition: "",
    description: "",
    category: "",
    sub_category: "",
    price: "",
    location: "",
    terms_and_conditions: "",
    item_images: ["", "", "", ""],
  });

  const [loading, setLoading] = React.useState(false);

  const [productImages, setProductImages] = React.useState([]);

  const [text, setText] = React.useState({
    title: fields.title,
    condition: fields.condition,
    description: fields.description,
    category: fields.category,
    sub_category: fields.sub_category,
    price: fields.price,
    location: fields.location,
    terms_and_conditions: fields.terms_and_conditions,
    item_images: fields.item_images,
  });

  const [showSub, setShowSub] = React.useState(false);

  const handleFile = (event) => {
    const { name, files } = event.target;
    const { item_images } = state;
    item_images[name] = URL.createObjectURL(files[0]);
    var images = productImages;
    images.push(files[0]);
    setProductImages(images);
    setState({ ...state, item_images });
    if (text.item_images.error) {
      var update = text.item_images;
      update.error = !text.item_images.error;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name.toLocaleLowerCase()]: value });
    if (name.toLocaleLowerCase() === "category" && value !== "") {
      setShowSub(true);
    }
  };

  const checkForm = () => {
    var complete = true;
    for (var element in state) {
      if (typeof state[element] === "string") {
        var update = text[element];
        if (
          state[element] === "" &&
          text[element]["required"] &&
          !text[element]["error"]
        ) {
          complete = false;
          update["error"] = !text[element]["error"];
          setText({ ...text, [element]: update });
        } else if (state[element] !== "" && text[element]["error"]) {
          update["error"] = !text[element]["error"];
          setText({ ...text, [element]: update });
        }
      }
    }
    const checkImages = state.item_images.find((item) => item.length > 0);
    if (!checkImages && !text.item_images.error) {
      update = text.item_images;
      update.error = !text.item_images.error;
    } else if (checkImages && complete) {
      return true;
    }
    return false;
  };

  const handleClick = async () => {
    const result = checkForm();
    if (result) {
      setLoading(true);
      const { status, data } = await addItem(state, productImages);
      if (status === statusCodes.SUCCESS_CREATED) {
        history.push({
          pathname: routes.singleItem,
          state: { id: data.postId },
        });
      }
    }
  };

  return (
    <Grid className={classes.rooot}>
      <AppBar>
        <HomePageHeader history={history} />
      </AppBar>
      <Box />
      <Box
        style={{
          paddingTop: 100,
        }}
      >
        <Card className={classes.root}>
          <CardContent>
            <div className={classes.image_icons}>
              {state.item_images.map((item, index) => (
                <Paper
                  aria-label="Add Item"
                  className={classes.addIcon}
                  elevation={3}
                  key={index}
                >
                  <IconButton className={classes.addButton}>
                    <InputLabel htmlFor={`input-file-${index}`}>
                      <Add
                        style={{
                          display:
                            state.item_images[index] === "" ? "flex" : "none",
                        }}
                      />
                      <img
                        src={state.item_images[index]}
                        style={{
                          display:
                            state.item_images[index] === "" ? "none" : "flex",
                        }}
                        className={classes.addedImage}
                        alt={`Item ${index}`}
                      />
                    </InputLabel>
                    <input
                      name={index}
                      accept="image/*"
                      type="file"
                      hidden
                      id={`input-file-${index}`}
                      onChange={handleFile}
                    />
                  </IconButton>
                </Paper>
              ))}
            </div>

            <FormHelperText
              error={text.item_images.error}
              className={classes.tipText}
            >
              {text.item_images.error
                ? text.item_images.errorText
                : text.item_images.helperText}
            </FormHelperText>
            <Typography variant="h6" className={classes.title}>
              Item Details
            </Typography>
            <hr />
            <div className={classes.leftSide}>
              <FormControl className={classes.singularField}>
                <Box boxShadow={1} width={250} className={classes.box}>
                  <TextField
                    error={text.title.error}
                    label="Title"
                    name="title"
                    onChange={handleChange}
                    className={classes.controlFields}
                    required
                    variant="outlined"
                  />
                </Box>
                <FormHelperText error={text.title.error}>
                  {text.title.error
                    ? text.title.errorText
                    : text.title.helperText}
                </FormHelperText>
              </FormControl>
              <FormControl className={classes.singularField}>
                <Box boxShadow={1} width={250} className={classes.box}>
                  <TextField
                    error={text.description.error}
                    label="Description"
                    name="description"
                    onChange={handleChange}
                    className={classes.controlFields}
                    required
                    variant="outlined"
                  />
                </Box>
                <FormHelperText error={text.description.error}>
                  {text.description.error
                    ? text.description.errorText
                    : text.description.helperText}
                </FormHelperText>
              </FormControl>
              <FormControl variant="outlined" className={classes.singularField}>
                <Box boxShadow={1} width={250} className={classes.box}>
                  <InputLabel htmlFor="condition">Condition</InputLabel>
                  <Select
                    required
                    native
                    label="Condition"
                    inputProps={{
                      name: "Condition",
                      id: "condition",
                    }}
                    className={classes.controlFields}
                    name="condition"
                    onChange={handleChange}
                    error={text.condition.error}
                  >
                    <option aria-label="None" value="" />
                    {options.conditions.map((condition) => (
                      <option value={condition}>{condition}</option>
                    ))}
                  </Select>
                </Box>
                <FormHelperText error={text.condition.error}>
                  {text.condition.error
                    ? text.condition.errorText
                    : text.condition.helperText}
                </FormHelperText>
              </FormControl>
              <FormControl variant="outlined" className={classes.singularField}>
                <Box boxShadow={1} width={250} className={classes.box}>
                  <InputLabel htmlFor="category">Category</InputLabel>
                  <Select
                    required
                    native
                    label="Category"
                    inputProps={{
                      name: "Category",
                      id: "category",
                    }}
                    className={classes.controlFields}
                    name="category"
                    onChange={handleChange}
                    error={text.category.error}
                  >
                    <option aria-label="None" value="" />
                    {categories.map((category) => (
                      <option value={category}>{category}</option>
                    ))}
                  </Select>
                </Box>
                <FormHelperText error={text.category.error}>
                  {text.category.error
                    ? text.category.errorText
                    : text.category.helperText}
                </FormHelperText>
              </FormControl>
              <FormControl
                variant="outlined"
                className={classes.singularField}
                style={{ display: showSub ? "flex" : "none" }}
              >
                <InputLabel htmlFor="sub-category">Sub-Category</InputLabel>
                <Box boxShadow={1} width={250} className={classes.box}>
                  <Select
                    native
                    label="Sub-Category"
                    inputProps={{
                      name: "Sub_Category",
                      id: "sub_category",
                    }}
                    className={classes.controlFields}
                    name="sub_category"
                    onChange={handleChange}
                    error={text.sub_category.error}
                  >
                    <option aria-label="None" value="" />
                    {!showSub
                      ? ""
                      : subCategories[state.category].map((subCategory) => (
                          <option value={subCategory}>{subCategory}</option>
                        ))}
                  </Select>
                </Box>
                <FormHelperText error={text.sub_category.error}>
                  {text.sub_category.error
                    ? text.sub_category.errorText
                    : text.sub_category.helperText}
                </FormHelperText>
              </FormControl>
            </div>
            <div className={classes.rightSide}>
              <FormControl className={classes.singularField}>
                <Box boxShadow={1} width={250} className={classes.box}>
                  <TextField
                    error={text.price.error}
                    className={classes.controlFields}
                    name="price"
                    onChange={handleChange}
                    label="Price"
                    required
                    variant="outlined"
                  />
                </Box>
                <FormHelperText error={text.price.error}>
                  {text.price.error
                    ? text.price.errorText
                    : text.price.helperText}
                </FormHelperText>
              </FormControl>
              <FormControl variant="outlined" className={classes.singularField}>
                <Box boxShadow={1} width={250} className={classes.box}>
                  <InputLabel htmlFor="location">Location</InputLabel>
                  <Select
                    native
                    label="Location"
                    inputProps={{
                      name: "Location",
                      id: "location",
                    }}
                    className={classes.controlFields}
                    name="location"
                    onChange={handleChange}
                    error={text.location.error}
                  >
                    <option aria-label="None" value="" />
                    {options.location.map((place) => (
                      <option value={place}>{place}</option>
                    ))}
                  </Select>
                </Box>
                <FormHelperText error={text.location.error}>
                  {text.location.error
                    ? text.location.errorText
                    : text.location.helperText}
                </FormHelperText>
              </FormControl>
            </div>

            <FormControl
              className={classes.singularField}
              style={{ width: 500 }}
            >
              <Box boxShadow={1} width={500} className={classes.box}>
                <TextField
                  error={text.terms_and_conditions.error}
                  style={{ width: 500 }}
                  label="Terms & Conditions"
                  name="terms_and_conditions"
                  onChange={handleChange}
                  required
                  variant="outlined"
                  multiline
                  rows={6}
                />
              </Box>
              <FormHelperText error={text.terms_and_conditions.error}>
                {text.terms_and_conditions.error
                  ? text.terms_and_conditions.errorText
                  : text.terms_and_conditions.helperText}
              </FormHelperText>
            </FormControl>
            <br />
            <div className={classes.footerButtons}>
              <Box boxShadow={8} width={150} className={classes.boxButton}>
                {!loading ? (
                  <Button
                    variant="contained"
                    className={classes.postButton}
                    onClick={handleClick}
                  >
                    <Typography className={classes.postButtonText}>
                      POST
                    </Typography>
                  </Button>
                ) : (
                  <LoadingContent primary="Uploading your post" />
                )}
              </Box>
            </div>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
};

export default AddItem;
