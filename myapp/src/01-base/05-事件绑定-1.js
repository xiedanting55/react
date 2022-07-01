import React, { Component } from 'react'

export default class App extends Component {
  add2 () {
    console.log('add2')
  }
  add3 = () => {
    console.log('add3')
  }
  add4 () {
    console.log('add4')
  }
  render () {
    return (
      <div>
        <input type="text" />
        <button onClick={() => {
          console.log('add1')
        }}>add</button>
        <button onClick={this.add2}>add</button>
        <button onClick={this.add3}>add</button>
        <button onClick={() => this.add4()}>add</button>
      </div>
    )
  }
}
