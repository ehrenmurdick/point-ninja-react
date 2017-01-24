import { connect } from 'react-redux'
import { Vote } from '../actions/vote'
import _ from 'lodash'

const option = (n) => (
  <option key={n} value={n}>{n}</option>
)

const values = [0, 1, 2, 3, 5, 8]

let pointInput

const view = ({vote}) => (
  <div>
    <select ref={el => pointInput = el}>
      {_.map(values, option)}
    </select>
    <button onClick={vote}>Vote</button>
  </div>
)

const mapToProps = (state) => ({
})

const mapToDispatch = (dispatch) => ({
  vote: () => dispatch(Vote(pointInput.value))
})

export const Voting = connect(mapToProps, mapToDispatch)(view)
