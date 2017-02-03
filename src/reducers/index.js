import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import {TestReducer} from './testReducer'
import {websocketMiddleware} from '../middlewares'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createAppStore = () => {
  const store = createStore(
    combineReducers({TestReducer}),
    {},
    composeEnhancers(applyMiddleware(websocketMiddleware))
  )

  store.subscribe(() => {
    console.log(store.getState())
  })
  return store
}
