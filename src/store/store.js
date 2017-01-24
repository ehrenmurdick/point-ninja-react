import { createStore, combineReducers } from 'redux'
import reducer from '../reducers/index'

export const createAppStore = () => {
  const store = createStore(reducer)

  store.subscribe(() => {
    console.log(store.getState())
  })

  return store
}
