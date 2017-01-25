export const createReducer = (defaultState, actionFunc) => {
  return (state = defaultState, action) => {
    let f = actionFunc[action.type]

    if (_.isFunction(f)) {
      return f(state, action)
    } else {
      return state
    }
  }
}
