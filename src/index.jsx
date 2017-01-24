import * as React from "react"
import * as ReactDOM from "react-dom"
import {Router, Route, hashHistory} from 'react-router'
import { Provider, connect } from 'react-redux'
import { Dispatch, Action, createStore } from 'redux'

const Thingy = ({value, incClick, decClick}) => {
  return <div>
    <p>{value}</p>
    <button onClick={incClick}>inc</button>
    <button onClick={decClick}>dec</button>
  </div>
}

const mapStateToProps = (state) => {
  return {
    value: state.n.toString()
  }
}

const IncAction = 'INCREMENT'
const DecAction = 'DECREMENT'

const mapDispatchToProps = (dispatch) => {
  return {
    incClick: () => {
      dispatch({type: IncAction})
    },
    decClick: () => {
      dispatch({type: DecAction})
    }
  }
}

const ThingyContainer = connect(mapStateToProps, mapDispatchToProps)(Thingy)

const reducer = (state, action) => {
  if (action.type == IncAction) {
    return {
      n: state.n + 1
    }
  } else if (action.type == DecAction) {
    return {
      n: state.n - 1
    }
  } else {
    return state
  }
}

const store = createStore(reducer, {n: 0})

store.subscribe(() => {
  console.log(store.getState())
})


ReactDOM.render(
  <Provider store={store}>
    <ThingyContainer />
  </Provider>,
  document.getElementById("app")
);
