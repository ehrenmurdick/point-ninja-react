import { CreatePartyAction } from '../actions/createParty'
import { LeavePartyAction } from '../actions/leaveParty'
import consts from '../constants'
import uuid from 'uuid'

export const party = (state = {}, action) => {
  if (action.type == CreatePartyAction) {
    return {
      id: uuid.v4(),
      scale: consts.Scales[action.scale]
    }
  } else if (action.type == LeavePartyAction) {
    return {}
  }
  return state
}