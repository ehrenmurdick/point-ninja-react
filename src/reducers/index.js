import { combineReducers } from 'redux'
import { votes } from './votes'
import { party } from './party'

export default combineReducers({
  votes,
  party
})
