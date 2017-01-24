import { VoteAction } from '../actions/vote'
import uuid from 'uuid'

export const votes = (state = [], action) => {
  if (action.type == VoteAction) {
    return [
      ...state,
      {id: uuid.v4(), points: action.points}
    ]
  }
  return state
}
