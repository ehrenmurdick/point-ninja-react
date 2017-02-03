import * as _ from 'lodash'

export const syncMiddleware = store => next => action => {
  if (action.type === 'REMOTE_SYNC') {
    console.log(action)
    let state = store.getState()
    let isHost = state.hostReducer
    if (isHost) {
      store.dispatch({
        type: 'RESET',
        state: state
      })
    }
  } else if (action.type === 'REMOTE_RESET') {
    console.log(action)
    let state = store.getState()
    if (!state.syncReducer) {
      return
    }
  }
  next(action)
}
