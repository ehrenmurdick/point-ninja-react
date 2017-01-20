import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, hashHistory} from 'react-router';

import { Home } from "./components/Home";

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
  </Router>,
  document.getElementById("app")
);
