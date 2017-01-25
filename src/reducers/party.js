import { CreatePartyAction } from '../actions/createParty'
import { LeavePartyAction } from '../actions/leaveParty'
import { createReducer } from './reducer'
import consts from '../constants'
import uuid from 'uuid'

const createParty = (state, action) => {
  return {
    id: uuid.v4(),
    scale: consts.Scales[action.scale]
  }
}

export const party = createReducer({}, {
  [CreatePartyAction]: createParty,
  [LeavePartyAction]: () => ({})
})
