import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import {TestReducer} from './testReducer'
import {syncReducer} from './syncReducer'
import {id} from './id'
import {participants} from './participants'

import {websocketMiddleware} from '../middlewares'
import {syncMiddleware} from '../middlewares'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createAppStore = () => {
  const store = createStore(
    combineReducers({id, participants, TestReducer, syncReducer}),
    {},
    composeEnhancers(applyMiddleware(websocketMiddleware, syncMiddleware))
  )

  store.subscribe(() => {
    console.log(store.getState())
  })
  return store
}
