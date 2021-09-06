import { connect } from 'react-redux'
import React from 'react'

const view = ({show, participant}) => {
  let vote
  if (participant.vote) {
    vote = participant.vote
  } else {
    vote = "x"
  }

  return <div>
    { show ? vote : "" }
  </div>
}

const mapToProps = (state, {participant}) => ({
  participant,
  show: state.uiReducer.hasVoted,
})


const mapToDispatch = (dispatch) => ({
})

export const OtherVote = connect(mapToProps, mapToDispatch)(view)
