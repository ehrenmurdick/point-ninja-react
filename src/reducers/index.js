import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import {TestReducer} from './testReducer'
import {hostReducer} from './hostReducer'
import {syncReducer} from './syncReducer'
import {websocketMiddleware} from '../middlewares'
import {syncMiddleware} from '../middlewares'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createAppStore = () => {
  const store = createStore(
    combineReducers({TestReducer, hostReducer, syncReducer}),
    {},
    composeEnhancers(applyMiddleware(websocketMiddleware, syncMiddleware))
  )

  store.subscribe(() => {
    console.log(store.getState())
  })
  return store
}
