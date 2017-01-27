import uuid from 'uuid'
import { CreateUserAction } from '../actions/createUser'
import { JoinPartyAction } from '../actions/join'
import { createReducer } from './reducer'


export const currentUser = createReducer({}, {
  [CreateUserAction]: (state, action) => ({ id: uuid.v4() }),
  [JoinPartyAction]: (state, action) => (_.assign(state, {userName: action.userName}))
})
