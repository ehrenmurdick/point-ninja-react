import * as React from 'react'
import { MyAction, AppStore } from './state'

interface HomeState {
  num: number
}

export class Home extends React.Component<{}, HomeState> {
  static contextTypes = {
    store: React.PropTypes.any
  }

  constructor(props: {}, context: any) {
    super(props, context)
    this.state = { num: 0 }
  }

  componentDidMount = () => {
    this.context.store.subscribe(() => {
      this.setState({
        num: this.context.store.getState()
      })
    })
  }

  increment = () => {
    this.context.store.dispatch({type: MyAction.IncrementCounter})
  }

  decrement = () => {
    this.context.store.dispatch({type: MyAction.DecrementCounter})
  }

  public render(): JSX.Element {
    return <div>
    <button onClick={this.increment}>Increment!</button>
    <button onClick={this.decrement}>Decrement!</button>
    <p>{this.state.num}</p>
    </div>;
  }
}
