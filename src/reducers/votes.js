import { VoteAction } from '../actions/vote'

export const votes = (state = [], action) => {
  if (action.type == VoteAction) {
    return [
      ...state,
      {points: action.points}
    ]
  }
  return state
}
