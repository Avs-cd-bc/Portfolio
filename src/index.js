//application entry-point
/*eslint-disable import/default */

import "babel-polyfill"; //we need polyfills because there is a set of features in ES6 that babel can't transpile.
// So for these we have to polyfill
import React from "react";
import { render } from "react-dom"; //need this to gain access to the render function which works in the browser
import { Router, browserHistory } from "react-router";//need access to the Router component
//also need acces to browserHistory to handle history in react-router, this gives nice clean URLs
//has support for html5 pushState
import routes from "./routes";//getting the routes
//importing stylings that webpack can bundle for us

import configureStore from "./store/configureStore";
import "./styles/styles.css";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Provider} from "react-redux";
import request from "superagent-bluebird-promise";

const store = configureStore();

  render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById("app")
  );
