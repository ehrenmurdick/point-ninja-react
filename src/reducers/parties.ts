import { Actions } from '../components/state'
import { Action } from 'redux'
import * as uuid from 'uuid'

export interface Party {
  id: string
}

export function partyState(state: Party = {id: ""}, action: Action): Party {
  switch(action.type) {
    case Actions.NewParty:
      return { id: uuid.v1() }
    default:
      return state
  }
}
