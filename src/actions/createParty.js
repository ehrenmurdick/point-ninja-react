import { routes } from '../routes'
import uuid from 'uuid'

export const CreatePartyAction = 'CREATE_PARTY'

export const CreateParty = (scale) => {
  let id = uuid.v4()

  return {
    type: CreatePartyAction,
    nextLocation: routes.joinPath,
    params: {":partyId": id},
    uuid: id,
    scale
  }
}
