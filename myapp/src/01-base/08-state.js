import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      flag: true,
      name: 'test'
    }
  }
  // state = {
  //   flag: true
  // }
  collect = () => {
    this.setState({
      flag: !this.state.flag,
      name: '小哈'
    })
  }
  render () {
    return (
      <div>
        <h1>REACT开发-{this.state.name}</h1>
        <button onClick={this.collect}>{this.state.flag ? '收藏' : '取消收藏'}</button>
      </div>
    )
  }
}

export default App