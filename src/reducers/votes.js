import _ from 'lodash'

import { SyncVoteAction, VoteAction } from '../actions/vote'
import { LeavePartyAction } from '../actions/leaveParty'
import { createReducer } from './reducer'


const construct = ({uuid, points, userId, partyId}) => ({
  uuid,
  points,
  userId,
  partyId
})

const createVote = (state, action) => {
  return [
    ..._.filter(state, (v) => v.userId !== action.userId),
    construct(action)
  ]
}

const syncVote = (state, action) => {
  return [
    ..._.differenceBy(state, action.votes, 'userId'),
    ...action.votes
  ]
}

export const votes = createReducer([], {
  [VoteAction]: createVote,
  [SyncVoteAction]: syncVote,
  [LeavePartyAction]: (state, action) => []
})
