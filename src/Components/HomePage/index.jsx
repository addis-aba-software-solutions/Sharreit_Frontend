import React from "react";
import { Typography } from "@material-ui/core";
import HomePageHeader from "./components/HomePageHeader";
import ItemsView from "./components/itemsView"

export default function Landing({ history }) {
  const [state, setState] = React.useState({
    category: "", subCategory: ""
  })

  const assignCategory = () => {

  }

  return (
    <>
      <HomePageHeader />
      <ItemsView history={history} category={state.category} subCategory={state.subCategory} />
    </>
  )
}
