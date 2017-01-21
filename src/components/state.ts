import { Action, Store, createStore, combineReducers } from 'redux'
import { Party, partyState } from '../reducers/parties'

export enum Actions {
  NewParty
}

export type State = {
  party: Party
}

export type AppStore = Store<State>

export function createAppStore(): AppStore {
  return createStore<State>(combineReducers<State>({
    partyState
  }))
}
