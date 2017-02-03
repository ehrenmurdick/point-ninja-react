import { connect } from 'react-redux'
import * as React from 'react'

const view = () => (
  <div>
    <button>Send item</button>
  </div>
)

const mapToProps = (state) => ({
})

const mapToDispatch = (dispatch) => ({
})

export const Test = connect(mapToProps, mapToDispatch)(view)
