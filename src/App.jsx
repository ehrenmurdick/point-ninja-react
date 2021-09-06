import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import { Votes } from './components'
import * as _ from 'lodash'

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
      <div className="App container">
        <Votes />
      </div>
    );
  }
}

export default App;
