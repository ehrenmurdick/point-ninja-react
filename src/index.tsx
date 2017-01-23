import * as React from "react"
import * as ReactDOM from "react-dom"
import {Router, Route, hashHistory} from 'react-router'
import { createAppStore } from './components/state'
import { Provider } from 'react-redux'

import { Home } from "./components/home"
import { Party } from "./components/party"

import { NewUser } from './reducers/users'

let store = createAppStore()

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(NewUser())


ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="/:partyId" component={Party} />
  </Router>
  </Provider>,
  document.getElementById("app")
);
