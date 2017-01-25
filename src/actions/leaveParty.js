import { routes } from '../routes'

export const LeavePartyAction = 'LEAVE_PARTY'

export const LeaveParty = () => ({
  type: LeavePartyAction,
  nextLocation: routes.rootPath
})
