import React from 'react'
import { connect } from 'react-redux'
import { map } from 'lodash'
import { Name } from './name'
import { MyVote } from './myVote'
import { OtherVote } from './otherVote'

const vote = (user) => (participant) => {
  let isCurrentUser = participant.id === user.id
  return <div key={participant.id} className="vote">
    <div className="participant">{
      isCurrentUser ? <Name /> : participant.name || "anon"
    }</div>
    <div className="value">
      { isCurrentUser ? <MyVote participant={participant}/> : <OtherVote participant={participant} /> }
    </div>
  </div>
}

const view = ({participants, user, nextRound}) => (
  <div className="votes">
    {map(participants, vote(user))}
    <button onClick={nextRound}>Next round!</button>
  </div>
)

const mapToProps = ({participants, user}) => ({
  participants,
  user
})

const mapToDispatch = (dispatch) => ({
  nextRound: () => {
    dispatch({
      type: "NEXT"
    })
  }
})

export const Votes = connect(mapToProps, mapToDispatch)(view)
