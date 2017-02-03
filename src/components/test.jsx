import { connect } from 'react-redux'
import * as _ from 'lodash'
import * as React from 'react'

const itemLi = (i) => (
  <li>{i}</li>
)

const max = (a) => _.reduce(a, ((x, y) => x > y ? x : y), 0)

const view = ({items, participants, sendItem, sync}) => (
  <div>
    <button onClick={sendItem(max(items)+1)}>Send item</button>
    <button onClick={sync}>Sync</button>
    <ul style={{float: 'left'}}>
      {_.map(items, itemLi)}
    </ul>
    <ul style={{float: 'right'}}>
      {_.map(participants, itemLi)}
    </ul>
  </div>
)

const mapToProps = (state) => ({
  items: state.TestReducer,
  participants: state.participants,
})

const mapToDispatch = (dispatch) => ({
  sendItem: (n) => () => dispatch({type: 'ADD_ITEM', n}),
  sync: () => dispatch({type: 'SYNC'})
})

export const Test = connect(mapToProps, mapToDispatch)(view)
