import React, { Component } from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux'

import './App.css';
import {Test} from './components'
import { createAppStore } from './reducers'

const store = createAppStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">

          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>

          <Test />
        </div>
      </Provider>
    );
  }
}

export default App;
