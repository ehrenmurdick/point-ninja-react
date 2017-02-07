import React from 'react'
import { connect } from 'react-redux'

const view = () => (
  <div className="vote">
    <div className="participant">Ehren</div>
    <div className="value">
      <input />
    </div>
  </div>
)

const mapToProps = (state) => ({
})

const mapToDispatch = (dispatch) => ({
})

export const Votes = connect(mapToProps, mapToDispatch)(view)
