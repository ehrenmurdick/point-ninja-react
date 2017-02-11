import {assign, stubObject} from 'lodash'

export const uiReducer = (state = {}, action) => {
  switch(action.type) {
    case 'UPDATE_NAME':
      return assign(stubObject(), state, {editingName: false})
    case 'EDIT_NAME':
      return assign(stubObject(), state, {editingName: true})
    case 'VOTE':
      return assign(stubObject(), state, {hasVoted: true})
    default:
      return state
  }
}
