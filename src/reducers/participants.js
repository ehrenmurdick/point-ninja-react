import {map, assign, stubObject, slice, findIndex, concat, reject} from 'lodash'


const update = (ary, oldId, newValue) => {
  let idx = findIndex(ary, (v) => v.id === oldId)
  return [
    ...slice(ary, 0, idx),
    assign(stubObject(), ary[idx], newValue),
    ...slice(ary, idx+1)
  ]
}

const updateAll = (ary, newValue) => {
  return map(ary, (p) => {
    return assign(stubObject(), p, newValue)
  })
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
      return update(state, action.id, {name: action.name})
    case 'VOTE':
    case 'REMOTE_VOTE':
      return update(state, action.id, {vote: action.value})
    case 'REMOTE_NEXT':
    case 'NEXT':
      return updateAll(state, {vote: null})
    default:
      return state
  }
}
