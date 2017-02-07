import React from 'react'
import { connect } from 'react-redux'


let nameInput

const view = ({user, editingName, editName, updateName}) => {
  if (editingName) {
    return <li className="you editing">
      <input type="text" ref={(e) => nameInput = e} />
      <button onClick={updateName}>save</button>
    </li>
  } else {
    return <li className="you">
      {user.name || 'anon'} (you)
      <button onClick={editName}>change</button>
    </li>
  }
}

const mapToProps = ({user, uiReducer}) => ({
  editingName: uiReducer.editingName,
  user,
})

const mapToDispatch = (dispatch) => ({
  editName: () => dispatch({type: 'EDIT_NAME'}),
  updateName: () => dispatch({type: 'UPDATE_NAME', name: nameInput.value}),
})

export const Name = connect(mapToProps, mapToDispatch)(view)

