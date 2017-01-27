import { combineReducers } from 'redux'
import { votes } from './votes'
import { party } from './party'
import { currentUser } from './currentUser'

const log = (state = [], action) => {
  return _.concat(state, action)
}

export default combineReducers({
  log,
  votes,
  party,
  currentUser
})
