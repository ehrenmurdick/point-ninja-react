import { routes } from '../routes'

export const JoinPartyAction = 'JOIN_PARTY'

export const JoinParty = (scale) => ({
  type: JoinPartyAction,
  nextLocation: routes.votePath,
  scale
})
