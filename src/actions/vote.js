import { routes } from '../routes'

export const VoteAction = 'VOTE'

export const Vote = (points, userId) => ({
  type: VoteAction,
  points,
  userId
})
