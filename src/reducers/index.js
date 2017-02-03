import { createStore, combineReducers } from 'redux'

import {TestReducer} from './testReducer'

export const createAppStore = () => {
  let store = createStore(combineReducers({TestReducer}))
  store.subscribe(() => {
    console.log(store.getState())
  })
  return store
}
