import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count: 0
  }
  addCount = () => {
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count)

    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count)

    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count)
  }

  addCount2 = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      })
      console.log(this.state.count)

      this.setState({
        count: this.state.count + 1
      })
      console.log(this.state.count)

      this.setState({
        count: this.state.count + 1
      })
      console.log(this.state.count)
    }, 0)
  }

  // setState 处在同步的逻辑中 异步更新状态，更新真实dom
  // setState 处在异步的逻辑中 同步更新状态，同步更新真实dom
  // setState 接收第二个参数，第二个参数是回调函数，状态和dom更新完成后后就会被触发
  render () {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.addCount}>点击1</button>
        <button onClick={this.addCount2}>点击2</button>
      </div>
    )
  }
}
