import * as _ from 'lodash'
let conn = new WebSocket('ws://localhost:8001')

export const websocketMiddleware = store => {
  conn.onmessage = (event) => {
    console.log(event)
    let action = JSON.parse(event.data)
    action.type = 'REMOTE_'+action.type
    store.dispatch(action)
  }

  conn.onopen = () => {
    store.dispatch({type: 'SYNC'})
  }

  return (next) => (action) => {
    if (!_.startsWith(action.type, 'REMOTE_')) {
      conn.send(JSON.stringify(action))
    }
    next(action)
  }
}
