export const syncReducer = (state = false, action) => {
  switch(action.type) {
    case 'SYNC':
      return true
    case 'REMOTE_RESET':
      return false
    default:
      return state
  }
}
