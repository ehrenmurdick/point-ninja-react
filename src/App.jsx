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
          <div>
            <input type="number" />
            <button>Vote</button>
          </div>

          <center>
            <table className="votes">
              <tbody>
                <tr>
                  <td>3</td>
                  <td>Ehren</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Alice</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Bob</td>
                </tr>
              </tbody>
            </table>
          </center>
          <button>Next story</button>

          <Test />
        </div>
      </Provider>
    );
  }
}

export default App;
