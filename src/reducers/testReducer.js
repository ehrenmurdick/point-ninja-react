import * as _ from 'lodash'

export const TestReducer = (state = [], action) => {
  if (action.type === 'ADD_ITEM') {
    let max = _.reduce(state, ((result, value) => result > value ? result : value), 0)
    return _.concat(state, max + 1)
  }
  return state
}
