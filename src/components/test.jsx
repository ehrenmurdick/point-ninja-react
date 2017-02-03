import { connect } from 'react-redux'
import * as _ from 'lodash'
import * as React from 'react'

const itemLi = (i) => (
  <li>{i}</li>
)

const max = (a) => _.reduce(a, ((x, y) => x > y ? x : y), 0)

const view = ({isHost, items, sendItem, claim, sync}) => (
  <div>
    <div>{isHost.toString()}</div>
    <button onClick={claim}>Own it</button>
    <button onClick={sendItem(max(items)+1)}>Send item</button>
    <button onClick={sync}>Sync</button>
    {_.map(items, itemLi)}
  </div>
)

const mapToProps = (state) => ({
  items: state.TestReducer,
  isHost: state.hostReducer
})

const mapToDispatch = (dispatch) => ({
  sendItem: (n) => () => dispatch({type: 'ADD_ITEM', n}),
  claim: () => dispatch({type: 'CLAIM'}),
  sync: () => dispatch({type: 'SYNC'})
})

export const Test = connect(mapToProps, mapToDispatch)(view)
