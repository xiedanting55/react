import React, { Component } from 'react'

class Child extends Component {
  childEdit = () => {
    // 不能修改
    this.props.text = "333"
  }
  render () {
    let { text } = this.props
    return (
      <div>
        child-{text}
        <button onClick={this.childEdit}>子组件</button>
      </div>
    )
  }
}

export default class App extends Component {
  state = {
    text: "111"
  }
  edit = () => {
    this.setState({ text: "222" })
  }
  render () {
    return (
      <div>
        <button onClick={this.edit}>父组件修改</button>
        <Child text={this.state.text} />
      </div>
    )
  }
}
