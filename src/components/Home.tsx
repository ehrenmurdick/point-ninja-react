import * as React from 'react'
import { Actions, AppStore } from './state'

interface HomeState {
}

interface HomeProps {
  router: any
}

export class Home extends React.Component<HomeProps, HomeState> {
  static contextTypes = {
    store: React.PropTypes.object
  }

  constructor(props: {}, context: any) {
    super(props, context)
  }

  componentDidMount = () => {
    this.context.store.subscribe(() => {
      let id = this.context.store.getState().partyState.id
      if (id != "") {
        this.props.router.push(`/${id}`)
      }
    })
  }

  startParty = () => {
    this.context.store.dispatch({type: Actions.NewParty})
  }

  public render(): JSX.Element {
    return <div>
    <button onClick={this.startParty}>Start a party!</button>
    </div>;
  }
}
