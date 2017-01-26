import _ from 'lodash'
import { hashHistory } from 'react-router'


const replaceParams = ({nextLocation, params}) => {
  let next = nextLocation
  if (_.isObject(params)) {
    _.forIn(params, (v, k) => {
      next = _.replace(next, k, v)
    })
  }
  return next
}

export const routeMiddleware = store => next => action => {
  if (!_.isNil(action.nextLocation)) {
    hashHistory.push(replaceParams(action))
  }
  next(action)
}

