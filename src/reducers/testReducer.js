import * as _ from 'lodash'

export const TestReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ITEM':
    case 'REMOTE_ADD_ITEM':
      return _.concat(state, action.n)
    default:
      return state
  }
}
