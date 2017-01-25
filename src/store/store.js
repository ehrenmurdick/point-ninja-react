import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routeMiddleware } from '../middlewares/routeMiddleware'
import reducer from '../reducers/index'

export const createAppStore = () => {
  const middleware = applyMiddleware(routeMiddleware)
  const store = createStore(reducer, middleware)

  store.subscribe(() => {
    console.log(store.getState())
  })

  return store
}
