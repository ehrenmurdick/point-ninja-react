import { Action, Store, createStore } from 'redux'

export enum MyAction {
  IncrementCounter,
  DecrementCounter
}

export type State = number

export type AppStore = Store<State>

function counter(state: State, action: Action): State {
  if (action.type == MyAction.IncrementCounter) {
    return state + 1
  } else if (action.type == MyAction.DecrementCounter) {
    return state - 1
  }
  return state
}

export function createAppStore(): AppStore {
  return createStore(counter, 0)
}
