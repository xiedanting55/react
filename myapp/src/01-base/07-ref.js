import React, { Component } from 'react'

// React并不会真正的绑定事件到每一个具体<>的元素上，而是采用事件代理的模式
export default class App extends Component {
  a = 3
  add2 () {
    console.log('add2')
    console.log(this.a)
  }
  add3 = (e) => {
    console.log(e.target)
    console.log('add3')
    console.log(this.a)
  }
  add4 () {
    console.log('add4')
    console.log(this.a)
  }
  render () {
    return (
      <div>
        <input type="text" ref="mytext" />
        <button onClick={() => {
          console.log('add1')
          console.log(this.refs.mytext.value)
        }}>add</button>
      </div>
    )
  }
}
