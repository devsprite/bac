import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {

  state = {
    counter: 0
  }

  increment = () => this.setState({ counter: this.state.counter + 1 })

  render() {
    const { counter } = this.state;

    return (

      <input
        type={'button'}
        value={'Mon compteur ' + counter}
        onClick={this.increment}
      />

    );
  }

}


render(<App />, document.getElementById('root'));
