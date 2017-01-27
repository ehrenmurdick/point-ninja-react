import _ from 'lodash'
import { hashHistory } from 'react-router'

import { SyncVote, VoteAction } from '../actions/vote'
import { CreatePartyAction } from '../actions/createParty'
import { JoinPartyAction } from '../actions/join'
import { LeavePartyAction } from '../actions/leaveParty'

let connection = new WebSocket('ws://localhost:8001')

export const websocketMiddleware = store => {
  connection.onmessage = (response) => {
    let action = JSON.parse(response.data)
    store.dispatch(action)
  }

  return (next) => (action) => {
    switch (action.type) {
      case VoteAction:
      case CreatePartyAction:
      case JoinPartyAction:
      case LeavePartyAction:
        connection.send(JSON.stringify(action))
        break
    }
    next(action)
  }
}

