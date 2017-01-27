import { connect } from 'react-redux'
import { JoinParty } from '../actions/join'

let nameInput

const view = ({join, params, userName}) => (
  <div>
    <input defaultValue={userName} ref={(el) => nameInput = el}/>
    <button onClick={join(params.partyId)}>Join!</button>
  </div>
)

const joinParty = (dispatch) => (partyId) => () => {
  dispatch(JoinParty(partyId, nameInput.value))
}

const mapToProps = (state) => ({
  userName: state.currentUser.userName
})

const mapToDispatch = (dispatch) => ({
  join: joinParty(dispatch)
})

export const Join = connect(mapToProps, mapToDispatch)(view)
