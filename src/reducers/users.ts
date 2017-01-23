import { Actions } from '../components/state'
import { Action } from 'redux'
import * as uuid from 'uuid'

export interface User {
  id: string
}

interface NewUserAction extends Action {
}

export function NewUser(): NewUserAction {
  return {
    type: Actions.NewUser
  }
}

export function user(state: User = {id: ""}, action: Action): User {
  switch(action.type) {
    case Actions.NewUser:
      return { id: uuid.v1() }
    default:
      return state
  }
}
