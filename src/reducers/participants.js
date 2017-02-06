import {slice, findIndex, concat, reject} from 'lodash'


const replace = (ary, oldId, newValue) => {
  let idx = findIndex(ary, (v) => v.id === oldId)
  return [
    ...slice(ary, 0, idx),
    newValue,
    ...slice(ary, idx+1)
  ]
}

export const participants = (state = [], action) => {
  switch(action.type) {
    case 'SYNC':
    case 'REMOTE_SYNC':
      return concat(state, {id: action.id, name: action.name})
    case 'REMOTE_RESET':
      return concat(state, action.state.participants)
    case 'REMOTE_LEAVE':
      return reject(state, (p) => p.id === action.id)
    case 'UPDATE_NAME':
    case 'REMOTE_UPDATE_NAME':
      return replace(state, action.id, {id: action.id, name: action.name})
    default:
      return state
  }
}
