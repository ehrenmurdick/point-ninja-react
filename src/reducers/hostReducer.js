export const hostReducer = (state = false, action) => {
  if (action.type === 'CLAIM') {
    return true
  }
  return state
}
