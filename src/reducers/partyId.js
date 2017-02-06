import {v4} from 'uuid'
export const partyId = (state = v4(), action) => {
  if (action.type === 'SYNC') {
    return action.partyId
  } else {
    return state
  }
}
