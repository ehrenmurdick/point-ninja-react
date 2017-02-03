import { connect } from 'react-redux'
import * as _ from 'lodash'
import * as React from 'react'

const itemLi = (i) => (
  <li key={i}>{i}</li>
)

const view = ({items, sendItem}) => (
  <div>
    <button onClick={sendItem}>Send item</button>
    {_.map(items, itemLi)}
  </div>
)

const mapToProps = (state) => ({
  items: state.TestReducer
})

const mapToDispatch = (dispatch) => ({
  sendItem: () => dispatch({type: 'ADD_ITEM'})
})

export const Test = connect(mapToProps, mapToDispatch)(view)
