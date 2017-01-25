import uuid from 'uuid'
import { CreateUserAction } from '../actions/createUser'
import { createReducer } from './reducer'


export const currentUser = createReducer({}, {
  [CreateUserAction]: (state, action) => ({ id: uuid.v4() })
})
