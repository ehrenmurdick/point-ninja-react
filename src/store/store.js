import { createStore, combineReducers } from 'redux'
import { hashHistory } from 'react-router'
import reducer from '../reducers/index'

export const createAppStore = () => {
  const store = createStore(reducer)

  store.subscribe(() => {
    console.log(store.getState())
  })

  store.subscribe(() => {
    hashHistory.push(store.getState().route.location)
  })

  return store
}
