import { connect } from 'react-redux'
import { Vote } from '../actions/vote'
import { LeaveParty } from '../actions/leaveParty'

import _ from 'lodash'

const option = (n) => (
  <option key={n} value={n}>{n}</option>
)

const voteLi = (v) => (
  <li key={v.id}>{v.points}</li>
)

const values = [0, 1, 2, 3, 5, 8]

let pointInput

const view = ({vote, votes, leaveParty}) => (
  <div>
    <select ref={el => pointInput = el}>
      {_.map(values, option)}
    </select>
    <button onClick={vote}>Vote</button>
    <ul>
      {_.map(votes, voteLi)}
    </ul>
    <a href="#" onClick={leaveParty}>Leave this party</a>
  </div>
)

const mapToProps = (state) => ({
  votes: state.votes
})

const mapToDispatch = (dispatch) => ({
  vote: () => dispatch(Vote(pointInput.value)),
  leaveParty: (e) => {
    e.preventDefault()
    dispatch(LeaveParty())
  }
})

export const Voting = connect(mapToProps, mapToDispatch)(view)
