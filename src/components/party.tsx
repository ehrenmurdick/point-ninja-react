import * as React from 'react'
import { Actions, AppStore, createVote } from './state'
import { Link } from 'react-router'

interface PartyState {
  points: string
}

interface PartyProps {
  router: any
}

export class Party extends React.Component<PartyProps, PartyState> {
  static contextTypes = {
    store: React.PropTypes.object
  }

  constructor(props: {}, context: any) {
    super(props, context)
  }

  submitVote = () => {
    this.context.store.dispatch(createVote(this.state.points))
  }

  selectPoints = (e: React.FormEvent<HTMLSelectElement>): void => {
    this.setState({
      ...this.state,
      points: e.currentTarget.value
    })
  }

  componentDidMount = () => {
  }

  public render(): JSX.Element {
    return <div>
    <label>
      <p>Points</p>
      <select onChange={this.selectPoints}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="8">8</option>
      </select>
    </label>
    <p>
      <button onClick={this.submitVote}>Vote!</button>
    </p>

    <p>
      <Link to="/">Leave party</Link>
    </p>

    <Link to="/">Observer mode</Link>
    </div>;
  }
}
