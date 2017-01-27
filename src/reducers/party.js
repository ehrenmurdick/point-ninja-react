import { CreatePartyAction } from '../actions/createParty'
import { JoinPartyAction } from '../actions/joinParty'
import { LeavePartyAction } from '../actions/leaveParty'
import { createReducer } from './reducer'
import consts from '../constants'
import uuid from 'uuid'

const createParty = (state, action) => {
  return {
    uuid: action.uuid,
    scale: consts.Scales["Fibonacci"]
  }
}

const joinParty = (state, action) => {
  return {
    uuid: action.uuid,
    scale: consts.Scales["Fibonacci"]
  }
}

export const party = createReducer({}, {
  [CreatePartyAction]: createParty,
  [LeavePartyAction]: () => ({}),
  [JoinPartyAction]: joinParty,
})
