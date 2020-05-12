import React from "react";
import {
  Typography,
  Slider,
  Box,
  Grid,
  Divider,
  Button,
} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const classes = {
  root: {
    padding: 30,
    backgroundColor: "#FFFFFF",
  },
  header: {
    fontSize: 15,
  },
  spacer: {
    margin: 10,
    padding: 1,
  },
  formControl: {
    minWidth: "100%",
    paddingBottom: 20,
  },
  slider: {
    color: "#1081D1",
  },
  sliderContainer: {
    padding: 5,
  },
  price: {
    marginTop: 25,
  },
  sortButton: {
    color: "#FFFFFF",
    backgroundColor: "#1081D1",
    margin: 5,
  },
};

export default function Filter() {
  const [age, setAge] = React.useState("");

  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box style={classes.root}>
      <Grid xs={12} align="center">
        <Typography style={classes.header}>Filter your Search By</Typography>
        <Divider style={classes.spacer} />
        <Grid xs={12}>
          <FormControl style={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              All Categories
            </InputLabel>
            <InputLabel id="demo-simple-select-helper-label">
              All Categories
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={12}>
          <FormControl style={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Sub-Categories
            </InputLabel>
            <InputLabel id="demo-simple-select-helper-label">
              Sub Categories
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Divider style={classes.spacer} />

        <Box xs={12} align="left" style={classes.sliderContainer}>
          <Typography variant="caption" id="input-slider" gutterBottom>
            Distance
          </Typography>
          <Grid item xs={12}>
            <Slider
              style={classes.slider}
              value={typeof value === "number" ? value : 10}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="caption"
              value={value}
              disabled
              onChange={handleInputChange}
              onBlur={handleBlur}
            >
              `{value} KM`
            </Typography>
          </Grid>
        </Box>
        <Divider style={classes.spacer} />

        <Box xs={12} align="left" style={classes.sliderContainer}>
          <Typography variant="caption" id="input-slider" gutterBottom>
            Price
          </Typography>
          <Grid container xs={12} spacing={3}>
            <Grid item xs={2} align="center">
              <Typography style={classes.price} variant="body2">
                From
              </Typography>
            </Grid>
            <Grid item xs={4} align="left">
              <FormControl style={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">
                  Lowest
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  fullWidth
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <Typography align="center" style={classes.price} variant="body2">
                To
              </Typography>
            </Grid>{" "}
            <Grid item xs={4}>
              <FormControl align="left" style={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">
                  Highest
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  fullWidth
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
        <Divider style={classes.spacer} />

        <Box xs={12} align="left" style={classes.sliderContainer}>
          <Typography variant="caption" id="input-slider" gutterBottom>
            Sort By
          </Typography>
          <Grid container>
            <Grid item xs={4}>
              <Button
                size="small"
                style={classes.sortButton}
                variant="contained"
              >
                Relevance
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Button
                size="small"
                style={classes.sortButton}
                variant="contained"
              >
                Newest First
              </Button>
            </Grid>
            <Grid xs={5}>
              <Button
                size="small"
                style={classes.sortButton}
                variant="contained"
              >
                Closest First
              </Button>
            </Grid>

            <Grid xs={6}>
              <Button
                size="small"
                style={classes.sortButton}
                variant="contained"
              >
                Price: Low to High
              </Button>
            </Grid>
            <Grid xs={6}>
              <Button
                size="small"
                style={classes.sortButton}
                variant="contained"
              >
                Price: Hign to Low
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Divider style={classes.spacer} />

        <Box xs={12} align="left" style={classes.sliderContainer}>
          <Typography variant="caption" id="input-slider" gutterBottom>
            Posted Within
          </Typography>
          <Grid container>
            <Grid item xs={4}>
              <Button
                size="small"
                style={classes.sortButton}
                variant="contained"
              >
                All Items
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                size="small"
                style={classes.sortButton}
                variant="contained"
              >
                The last 24 Hours
              </Button>
            </Grid>
            <Grid xs={6}>
              <Button
                size="small"
                style={classes.sortButton}
                variant="contained"
              >
                The last seven days
              </Button>
            </Grid>

            <Grid xs={6}>
              <Button
                size="small"
                style={classes.sortButton}
                variant="contained"
              >
                last month
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Divider style={classes.spacer} />

        <Grid xs={12}>
          <Button size="large" style={classes.sortButton} variant="contained">
            Filter My list
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
