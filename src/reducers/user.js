import {v4} from 'uuid'

export const user = (state = {id: v4()}, action) => {
  switch(action.type) {
    case 'UPDATE_NAME':
      return {id: state.id, name: action.name}
    default:
      return state
  }
}
