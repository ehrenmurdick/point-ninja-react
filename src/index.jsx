import * as React from "react"
import { Provider } from 'react-redux'
import { Voting } from './components/voting'
import { createAppStore } from './store/store'

const store = createAppStore()

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Voting />
    </div>
  </Provider>,
  document.getElementById("app")
);
