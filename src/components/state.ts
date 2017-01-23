import * as uuid from 'uuid'
import persistState from 'redux-localstorage'
import { Action, Store, createStore, combineReducers } from 'redux'

import { Party, partyState } from '../reducers/parties'
import { User, NewUser, user } from '../reducers/users'

export enum Actions {
  NewParty,
  NewUser,
  Vote,
}

export interface Vote {
  points: string
}

export type State = {
  party: Party
  votes: Vote[]
}

interface VoteAction extends Action {
  points: string
}

export function createVote(points: string): VoteAction {
  return {
    type: Actions.Vote,
    points: points
  }
}

function votes(state: Vote[] = [], action: VoteAction): Vote[] {
  if (action.type === Actions.Vote) {
    return [...state, {
      points: action.points
    }]
  }
  return state
}

export type AppStore = Store<State>

export function createAppStore(): AppStore {
  return createStore<State>(
    combineReducers<State>({ user, votes, partyState })
  )
}
