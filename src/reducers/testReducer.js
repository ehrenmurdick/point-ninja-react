import * as _ from 'lodash'

export const TestReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ITEM':
    case 'REMOTE_ADD_ITEM':
      return _.concat(state, action.n)
    case 'REMOTE_RESET':
      return action.state.TestReducer
    default:
      return state
  }
}
