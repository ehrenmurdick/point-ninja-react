import uuid from 'uuid'
import _ from 'lodash'

import { VoteAction } from '../actions/vote'
import { LeavePartyAction } from '../actions/leaveParty'
import { createReducer } from './reducer'


const construct = (points, userId) => ({
  id: uuid.v4(),
  points,
  userId
})

const createVote = (state, action) => {
  return [
    ..._.filter(state, (v) => v.userId !== action.userId),
    construct(action.points, action.userId)
  ]
}

export const votes = createReducer([], {
  [VoteAction]: createVote,
  [LeavePartyAction]: (state, action) => []
})
