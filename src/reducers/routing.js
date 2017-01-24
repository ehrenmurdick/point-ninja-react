import { CreatePartyAction } from '../actions/createParty'
import { LeavePartyAction } from '../actions/leaveParty'

export const route = (state = {location: '/'}, action) => {
  if (action.type == CreatePartyAction) {
    return {
      location: `/vote`
    }
  } else if (action.type == LeavePartyAction) {
    return {
      location: '/'
    }
  }
  return state
}
