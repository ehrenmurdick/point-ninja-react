import { connect } from 'react-redux'
import { Vote } from '../actions/vote'
import { LeaveParty } from '../actions/leaveParty'

import uuid from 'uuid'

import _ from 'lodash'

const option = (n) => (
  <option key={n} value={n}>{n}</option>
)

const voteLi = (v) => (
  <li key={v.id}>{v.points}</li>
)

const shouldShowVotes = (votes, userId) => !_.isNil(_.find(votes, (v) => v.userId === userId))

const If = ({children, test}) => {
  if (test) {
    return children
  } else {
    return false
  }
}

let pointInput
const view = ({values, vote, votes, leaveParty, userId}) => (
  <div>
    <select ref={el => pointInput = el}>
      {_.map(values, option)}
    </select>
    <button onClick={vote(userId)}>Vote</button>

    <If test={shouldShowVotes(votes, userId)}>
      <ul>{_.map(votes, voteLi)}</ul>
    </If>

    <a href="#" onClick={leaveParty}>Leave this party</a>

    <button onClick={vote(uuid.v4())}>Fake teamwork</button>
  </div>
)

const mapToProps = (state) => ({
  votes: state.votes,
  values: state.party.scale,
  userId: state.currentUser.id
})

const mapToDispatch = (dispatch) => ({
  vote: (userId) => () => dispatch(Vote(pointInput.value, userId)),
  leaveParty: (e) => {
    e.preventDefault()
    dispatch(LeaveParty())
  }
})

export const Voting = connect(mapToProps, mapToDispatch)(view)
