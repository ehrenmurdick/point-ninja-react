import * as _ from 'lodash'

export const TestReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ITEM':
    case 'REMOTE_ADD_ITEM':
      let max = _.reduce(state, ((result, value) => result > value ? result : value), 0)
      return _.concat(state, max + 1)
    default:
      return state
  }
}
