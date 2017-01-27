import { routes } from '../routes'

export const JoinPartyAction = 'JOIN_PARTY'

export const JoinParty = (uuid) => ({
  type: JoinPartyAction,
  nextLocation: routes.votePath,
  uuid,
})

export default JoinParty
