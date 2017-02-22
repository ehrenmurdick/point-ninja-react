import * as _ from 'lodash'
import Q from 'js-queue'

const HOST = location.origin.replace(/^http/, 'ws')
let conn = new WebSocket(HOST);

let queue = new Q()
queue.stop = true

function sendMessage(action) {
  return function() {
    conn.send(JSON.stringify(action))
    this.next()
  }
}

export const websocketMiddleware = store => {
  conn.onmessage = (event) => {
    let action = JSON.parse(event.data)
    action.type = 'REMOTE_'+action.type
    let id = store.getState().user.id
    if (id !== action.id) {
      store.dispatch(action)
    }
  }

  conn.onopen = () => {
    queue.stop = false
    queue.next()
  }

  return (next) => (action) => {
    if (!_.startsWith(action.type, 'REMOTE_')) {
      let state = store.getState()
      action.id = state.user.id
      if (_.isNil(action.partyId)) {
        action.partyId = state.partyId
      }
      queue.add(sendMessage(action))
    }
    next(action)
  }
}
