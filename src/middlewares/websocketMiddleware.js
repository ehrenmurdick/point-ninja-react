import _ from 'lodash'
import { hashHistory } from 'react-router'

import { SyncVote, VoteAction } from '../actions/vote'
import { CreatePartyAction } from '../actions/createParty'

let connection = new WebSocket('ws://localhost:8001')

export const websocketMiddleware = store => {
  connection.onmessage = (response) => {
    let votes = JSON.parse(response.data)
    store.dispatch(SyncVote(votes))
  }

  return (next) => (action) => {
    switch (action.type) {
      case VoteAction:
        connection.send(JSON.stringify(action))
        break
      case CreatePartyAction:
        connection.send(JSON.stringify(action))
        break
    }
    next(action)
  }
}

