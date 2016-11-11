import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "./components/App";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import SourcesPage from "./components/SourcesPage"


//the Route component comes with react-router
//this will always load the app component, and pass either ProjecctsPage or SourcesPage
//based on the URL passed
export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/projects" component={ProjectsPage} />
    <Route path="/sources" component={SourcesPage} />
  </Route>
);
