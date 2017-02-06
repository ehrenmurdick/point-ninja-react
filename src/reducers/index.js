import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import {TestReducer} from './testReducer'
import {syncReducer} from './syncReducer'
import {uiReducer} from './uiReducer'
import {user} from './user'
import {partyId} from './partyId'
import {participants} from './participants'

import {websocketMiddleware} from '../middlewares'
import {syncMiddleware} from '../middlewares'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createAppStore = () => {
  const store = createStore(
    combineReducers({
      user,
      partyId,
      participants,
      TestReducer,
      syncReducer,
      uiReducer}),
    {},
    composeEnhancers(applyMiddleware(websocketMiddleware, syncMiddleware))
  )

  store.subscribe(() => {
    console.log(store.getState())
  })
  return store
}
