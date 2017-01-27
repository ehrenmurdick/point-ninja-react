import { routes } from '../routes'
import uuid from 'uuid'

export const VoteAction = 'VOTE'
export const SyncVoteAction = 'SYNC_VOTE'

export const Vote = (points, userId, partyId, userName) => ({
  type: VoteAction,
  uuid: uuid.v4(),
  userName,
  partyId,
  points,
  userId
})

export const SyncVote = (votes) => ({
  type: SyncVoteAction,
  votes
})
