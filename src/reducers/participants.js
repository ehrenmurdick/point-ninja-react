import {concat, reject} from 'lodash'

export const participants = (state = [], action) => {
  switch(action.type) {
    case 'SYNC':
    case 'REMOTE_SYNC':
      return concat(state, action.id)
    case 'REMOTE_RESET':
      return concat(state, action.state.participants)
    case 'REMOTE_LEAVE':
      return reject(state, (id) => id === action.id)
  }
  return state
}
