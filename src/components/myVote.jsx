import { connect } from 'react-redux'
import React from 'react'

let voteInput

const voteForm = (sendVote) => {
  return <form onSubmit={sendVote}>
    <input className="vote" type="number" ref={(e) => voteInput = e} />
    <button className="vote">vote</button>
  </form>
}

const view = ({show, participant, sendVote}) => {
  return <div>
    { show ? participant.vote : voteForm(sendVote(participant)) }
  </div>
}

const mapToProps = (state, {participant}) => ({
  participant,
  show: state.uiReducer.hasVoted,
})


const mapToDispatch = (dispatch) => ({
  sendVote: (participant) => (e) => {
    e.preventDefault()
    console.log(voteInput.value)
    dispatch({
      type: "VOTE",
      value: voteInput.value,
      id: participant.id,
    })
  }
})

export const MyVote = connect(mapToProps, mapToDispatch)(view)
