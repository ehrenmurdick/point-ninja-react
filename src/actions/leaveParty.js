import { routes } from '../routes'

export const LeavePartyAction = 'LEAVE_PARTY'

export const LeaveParty = (uuid) => ({
  type: LeavePartyAction,
  nextLocation: routes.rootPath,
  uuid
})
