import React, { Component } from 'react'
import logo from './logo.svg';
import { hashHistory } from 'react-router'
import * as _ from 'lodash'

import './App.css';
import {Test} from './components'

class App extends Component {
  static contextTypes = { store: React.PropTypes.object }

  componentWillMount = () => {
    let store = this.context.store
    let partyId = store.getState().partyId

    let paramId = this.props.params.partyId
    console.log(_.isNil(paramId))
    if (!_.isNil(paramId)) {
      store.dispatch({type: 'SYNC', partyId: paramId})
    } else {
      hashHistory.push(partyId)
    }
  }

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <Test partyId={this.props.params.partyId}/>
      </div>
    );
  }
}

export default App;
