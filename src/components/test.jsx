import { connect } from 'react-redux'
import * as _ from 'lodash'
import * as React from 'react'

const itemLi = (i) => (
  <li>{i}</li>
)

const max = (a) => _.reduce(a, ((x, y) => x > y ? x : y), 0)

const view = ({items, sendItem, sync}) => (
  <div>
    <button onClick={sendItem(max(items)+1)}>Send item</button>
    <button onClick={sync}>Sync</button>
    {_.map(items, itemLi)}
  </div>
)

const mapToProps = (state) => ({
  items: state.TestReducer,
})

const mapToDispatch = (dispatch) => ({
  sendItem: (n) => () => dispatch({type: 'ADD_ITEM', n}),
  sync: () => dispatch({type: 'SYNC'})
})

export const Test = connect(mapToProps, mapToDispatch)(view)
