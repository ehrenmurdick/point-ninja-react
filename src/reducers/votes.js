import _ from 'lodash'

import { SyncVoteAction, VoteAction } from '../actions/vote'
import { LeavePartyAction } from '../actions/leaveParty'
import { createReducer } from './reducer'


const construct = ({uuid, userName, points, userId, partyId}) => ({
  uuid,
  points,
  userId,
  userName,
  partyId
})

const createVote = (state, action) => {
  return [
    ..._.filter(state, (v) => v.userId !== action.userId),
    construct(action)
  ]
}

const syncVote = (state, action) => {
  console.log(action.votes)
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
