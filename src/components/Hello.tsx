import * as React from 'react';

interface HomeState {
  disabled: boolean;
}

type HomeProps = {};

export class Hello extends React.Component<HomeProps, HomeState> {
  clickCount: number;
  state: HomeState;

  constructor(props: any) {
    super(props);
    this.state = { disabled: false };
  }

  handleClick = (): void => {
    this.setState({
      disabled: true
    });
  }

  public render(): JSX.Element {
    return <div>
      <button disabled={this.state.disabled} onClick={this.handleClick}>Create a party!</button>
    </div>;
  }
}
