import { connect } from 'react-redux'
import * as _ from 'lodash'
import * as React from 'react'

import { Participants } from './participants'

const itemLi = (i) => (
  <li key={i}>{i}</li>
)

const max = (a) => _.reduce(a, ((x, y) => x > y ? x : y), 0)

const view = ({items, participants, sendItem, partyId, newParty}) => (
  <div>
    <button onClick={sendItem(max(items)+1)}>Send item</button>
    <div className="clear"></div>
    <div className="left">
      <ul>
        {_.map(items, itemLi)}
      </ul>
    </div>
    <div className="right">
      <Participants />
    </div>
  </div>
)

const mapToProps = (state, ownProps) => ({
  items: state.TestReducer,
  participants: state.participants,
  partyId: ownProps.partyId,
})

const mapToDispatch = (dispatch) => ({
  sendItem: (n) => () => dispatch({type: 'ADD_ITEM', n}),
})

export const Test = connect(mapToProps, mapToDispatch)(view)
