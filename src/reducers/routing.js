import { CreatePartyAction } from '../actions/createParty'
import { LeavePartyAction } from '../actions/leaveParty'
import { createReducer } from './reducer'
import { routes } from '../routes'

const defaultRoute = {location: '/'}
export const route = createReducer(defaultRoute, {
  [CreatePartyAction]: () => ({ location: routes.votePath }),
  [LeavePartyAction]: () =>  ({ location: routes.rootPath })
})
