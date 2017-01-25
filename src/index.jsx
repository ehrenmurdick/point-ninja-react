import * as React from "react"
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'

import { routes } from './routes'

import { Voting } from './components/voting'
import { Home } from './components/home'

import { createAppStore } from './store/store'
import { CreateUser } from './actions/createUser'

const store = createAppStore()

store.dispatch(CreateUser())

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path={routes.rootPath} component={Home} />
      <Route path={routes.votePath} component={Voting} />
    </Router>
  </Provider>,
  document.getElementById("app")
);
