export const syncReducer = (state = false, action) => {
  switch(action.type) {
    case 'SYNC':
      return true
    case 'REMOTE_RESET':
    case 'REMOTE_NOBODY_HOME':
      return false
    default:
      return state
  }
}
