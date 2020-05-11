import React from "react";
import AddItem from "./Components/AddItem/";
import Registration from "./Components/Registration";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./Components/SignIn/";
import CategoryPage from "./Components/Category Page/";
import LandingPage from "./Components/Landing Page/LandingPage";
import SingleItem from "./Components/ViewSingleItem/";
import AllItems from "./Components/ViewAllItems";
import HomePage from "./Components/HomePage";
import routes from "./Config/routes";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.Home} component={HomePage} exact />
        <Route path={routes.root} component={LandingPage} exact />
        <Route path={routes.signIn} component={SignIn} exact />
        <Route path={routes.category} component={CategoryPage} exact />
        <Route path={routes.registration} component={Registration} exact />
        <Route path={routes.addItem} component={AddItem} exact />
        <Route path={routes.singleItem} component={SingleItem} exact />
        <Route path={routes.AllItems} component={AllItems} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
