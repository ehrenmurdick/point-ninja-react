export const VoteAction = 'VOTE'

export const Vote = (n) => ({
  type: VoteAction,
  points: n
})
