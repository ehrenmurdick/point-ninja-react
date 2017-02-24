import * as _ from 'lodash'

export const syncMiddleware = store => next => action => {
  let state
  switch(action.type) {
    case 'REMOTE_SYNC':
      state = store.getState()
      store.dispatch({
        type: 'RESET',
        state: state
      })
      break
    case 'REMOTE_RESET':
      console.log(action)
      state = store.getState()
      if (!state.syncReducer) {
        return
      }
      break
    case 'SYNC':
      setTimeout(() => {
        store.dispatch({type: 'SYNC_TIMEOUT'})
      }, 2000)
      break
  }
  next(action)
}
