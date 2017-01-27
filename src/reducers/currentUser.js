import uuid from 'uuid'
import { CreateUserAction } from '../actions/createUser'
import { JoinPartyAction } from '../actions/joinParty'
import { createReducer } from './reducer'


export const currentUser = createReducer({}, {
  [CreateUserAction]: (state, action) => {
    return _.assign({
      id: uuid.v4()
    }, state)
  },
  [JoinPartyAction]: (state, action) => (_.assign(state, {userName: action.userName}))
})
