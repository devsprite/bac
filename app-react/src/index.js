import React, { Component } from 'react'
import { render } from 'react-dom'

const randomColor = () => {
    const color = '#' + Math.random().toString(16).substr(-6);
    console.log('color:', color);
    return  color;
}

class Card extends Component {
  render() {
    const style = {
      padding: 20,
      textAlign: 'center',
      color: 'white',
      backgroundColor: this.props.color,
    }

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}

class App extends Component {

  state = {
    color: 'skyblue'
  }

  randomizeColor = () => this.setState({color: randomColor()})

  render() {
    const {color} = this.state

    const style = {
      padding: 20,
    }

    return (
      <div style={style}>
        <Card color={color}>
          <input
            type={'button'}
            value={'Randomize Color: ' + color}
            onClick={this.randomizeColor}
          />
        </Card>
      </div>
    )
  }
}

render(<App />, document.querySelector('#root'))