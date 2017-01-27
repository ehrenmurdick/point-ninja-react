import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routeMiddleware } from '../middlewares/routeMiddleware'
import { websocketMiddleware } from '../middlewares/websocketMiddleware'
import reducer from '../reducers/index'

export const createAppStore = () => {
  const middleware = applyMiddleware(routeMiddleware, websocketMiddleware)
  const store = createStore(reducer, middleware)

  store.subscribe(() => {
    console.log('---- state ----------------')
    console.log(store.getState())
    console.log('----/state ----------------')
  })

  return store
}
