import { connect } from 'react-redux'
import { JoinParty } from '../actions/join'

const view = ({join, params}) => (
  <div>
    <button onClick={join(params.partyId)}>Join!</button>
  </div>
)

const joinParty = (dispatch) => (partyId) => () => {
  dispatch(JoinParty(partyId))
}

const mapToProps = (state) => ({
})

const mapToDispatch = (dispatch) => ({
  join: joinParty(dispatch)
})

export const Join = connect(mapToProps, mapToDispatch)(view)
