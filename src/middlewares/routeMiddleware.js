import _ from 'lodash'
import { hashHistory } from 'react-router'

export const routeMiddleware = store => next => action => {
  if (!_.isNil(action.nextLocation)) {
    hashHistory.push(action.nextLocation)
  }
  next(action)
}

