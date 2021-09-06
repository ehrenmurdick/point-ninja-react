import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'

import { createAppStore } from './reducers'

const store = createAppStore()

ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory}>
  <Route path="/:partyId" component={App} />
  <Route path="/" component={App} />
  </Router>
  </Provider>,
  document.getElementById('root')
);
