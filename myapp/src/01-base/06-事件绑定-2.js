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
        <input type="text" />
        <button onClick={() => {
          console.log('add1')
          console.log(this.a)
        }}>add(如果处理逻辑过多，不推荐这种写法)</button>
        <button onClick={this.add2.bind(this)}>add(不推荐)</button>
        <button onClick={this.add3}>add(推荐)</button>
        <button onClick={() => this.add4()}>add(推荐-传参)</button>
      </div>
    )
  }
}
