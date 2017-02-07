import React from 'react'
import { connect } from 'react-redux'
import * as _ from 'lodash'

import { Name } from './name'

const itemLi = (user) => (i) => {
  if (user.id === i.id) {
    return <Name key={user.id}/>
  } else {
    return <li key={i.id}>{i.name || 'anon'}</li>
  }
}

const view = ({user, participants}) => (
  <ul>
    {_.map(participants, itemLi(user))}
  </ul>
)

const mapToProps = ({user, participants}) => ({
  user,
  participants,
})

const mapToDispatch = (dispatch) => ({
})

export const Participants = connect(mapToProps, mapToDispatch)(view)
