import { routes } from '../routes'

export const JoinPartyAction = 'JOIN_PARTY'

export const JoinParty = (uuid) => ({
  type: JoinPartyAction,
  nextLocation: routes.joinPath,
  params: {partyId: uuid},
  uuid,
})

export default JoinParty
