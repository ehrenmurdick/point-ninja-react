import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import * as _ from 'lodash'

import './App.css';

class App extends Component {
  static contextTypes = { store: React.PropTypes.object }

  componentWillMount = () => {
    let store = this.context.store
    let partyId = store.getState().partyId

    let paramId = this.props.params.partyId
    if (!_.isNil(paramId)) {
      store.dispatch({type: 'SYNC', partyId: paramId})
    } else {
      hashHistory.push(partyId)
      store.dispatch({type: 'SYNC', partyId: partyId})
    }
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
