import { routes } from '../routes'

export const JoinPartyAction = 'JOIN_PARTY'

export const JoinParty = (uuid, userName) => ({
  type: JoinPartyAction,
  nextLocation: routes.votePath,
  userName,
  uuid,
})

export default JoinParty
