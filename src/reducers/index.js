import { combineReducers } from 'redux'
import { votes } from './votes'
import { party } from './party'
import { route } from './routing'
import { currentUser } from './currentUser'

export default combineReducers({
  votes,
  party,
  route,
  currentUser
})
