import { combineReducers } from 'redux'
import { votes } from './votes'
import { party } from './party'
import { currentUser } from './currentUser'

const log = (state = [], action) => _.slice(_.concat(state, action), 0, 5)

export default combineReducers({
  log,
  votes,
  party,
  currentUser
})
