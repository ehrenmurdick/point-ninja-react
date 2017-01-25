import { routes } from '../routes'

export const CreatePartyAction = 'CREATE_PARTY'

export const CreateParty = (scale) => ({
  type: CreatePartyAction,
  nextLocation: routes.votePath,
  scale
})
