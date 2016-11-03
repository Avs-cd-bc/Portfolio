import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "./components/App";
import HomePage from "./components/HomePage";


//the Route component comes with react-router
//this will always load the app component, and pass either ChampionsPage or ItemsPage
//based on the URL passed
export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
  </Route>
);
