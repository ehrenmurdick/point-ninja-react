import { routes } from '../routes'

export const JoinPartyAction = 'JOIN_PARTY'

export const JoinParty = (uuid, userName, redirect = routes.votePath) => ({
  type: JoinPartyAction,
  nextLocation: redirect,
  userName,
  uuid,
})

export default JoinParty
