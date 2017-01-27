import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routeMiddleware } from '../middlewares/routeMiddleware'
import { websocketMiddleware } from '../middlewares/websocketMiddleware'
import reducer from '../reducers/index'

export const createAppStore = () => {
  const middleware = applyMiddleware(routeMiddleware, websocketMiddleware)

  let state = {}
  try {
    let prevState = JSON.parse(window.localStorage.getItem('state'))
    if (!_.isNil(prevState)) {
      state = prevState
    }
  } catch (e) {
    console.log(e)
  }

  const store = createStore(reducer, state, middleware)

  store.subscribe(() => {
    window.localStorage.setItem('state', JSON.stringify(store.getState()))
  })

  store.subscribe(() => {
    console.log('---- state ----------------')
    console.log(store.getState())
    console.log('----/state ----------------')
  })

  return store
}
