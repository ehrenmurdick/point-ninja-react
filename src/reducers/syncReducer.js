export const syncReducer = (state = false, action) => {
  switch(action.type) {
    case 'SYNC':
      return true
    case 'REMOTE_RESET':
    case 'SYNC_TIMEOUT':
      return false
    default:
      return state
  }
}
