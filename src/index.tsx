import * as React from "react"
import * as ReactDOM from "react-dom"
import {Router, Route, hashHistory} from 'react-router'
import { createAppStore } from './components/state'
import { Provider } from 'react-redux'

import { Home } from "./components/home"

let store = createAppStore()

store.subscribe(() => {
  console.log(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
  </Router>
  </Provider>,
  document.getElementById("app")
);
