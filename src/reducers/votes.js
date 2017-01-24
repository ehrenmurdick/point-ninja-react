import { VoteAction } from '../actions/vote'
import { LeavePartyAction } from '../actions/leaveParty'
import uuid from 'uuid'

export const votes = (state = [], action) => {
  if (action.type == VoteAction) {
    return [
      ...state,
      {id: uuid.v4(), points: action.points}
    ]
  } else if (action.type == LeavePartyAction) {
    return []
  }
  return state
}
