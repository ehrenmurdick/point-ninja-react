import React from 'react'
import { connect } from 'react-redux'


let nameInput

const view = ({user, editingName, editName, updateName}) => {
  if (editingName) {
    return <div>
      <form onSubmit={updateName}>
        <input autoFocus type="text" ref={(e) => nameInput = e} />
        <button>save</button>
      </form>
    </div>
  } else {
    return <div>
      {user.name || 'anon (you)'}
      <button onClick={editName}>change</button>
    </div>
  }
}


const updateName = (dispatch) => (event) => {
  event.preventDefault()
  dispatch({type: 'UPDATE_NAME', name: nameInput.value})
}

const mapToProps = ({user, uiReducer}) => ({
  editingName: uiReducer.editingName,
  user,
})

const mapToDispatch = (dispatch) => ({
  editName: () => dispatch({type: 'EDIT_NAME'}),
  updateName: updateName(dispatch),
})

export const Name = connect(mapToProps, mapToDispatch)(view)

