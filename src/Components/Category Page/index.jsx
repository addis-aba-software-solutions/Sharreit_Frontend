import React from "react";
import { Box, Paper, Grid, Typography } from "@material-ui/core";
import Header from "../Headers&Footers/Header";
import BreadCrumps from "../Headers&Footers/BreadCrumps";

import Categories from "./components/categoriesCard";
import classes from "./styles";
import routes from "../../Config/routes";
import PremiumAds from "./components/PremiumAds";
import { categories, subCategories } from "./data";
import HomePageHeader from "../HomePage/components/HomePageHeader"

const CategoriesView = ({ location, history }) => {
  const gotoViewAll = (id) => {
    var _category = categories[location.state.type]
    history.push({
      pathname: routes.AllItems,
      state: { category: _category,  subCategory: subCategories[_category][id] }
    })
  }

  return (
    <>
      <Box style={classes.root}>
        <HomePageHeader history={history} />
        <Box style={{ height: 80 }} />
        <Grid xs={12} align="center">
          {/* <BreadCrumps /> */}
        </Grid>
        <PremiumAds />
        <Typography style={classes.Headertext2} glutterBottom>
          {categories[location.state.type]}
        </Typography>
        {<Categories type={location.state.type} gotoViewItem={gotoViewAll} />}
      </Box>
    </>
  );
};

export default CategoriesView;
