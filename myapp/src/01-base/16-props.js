import React, { Component } from 'react'
import Navbar from './Navbar'

export default class App extends Component {
  render () {
    var obj = {
      title: '测试',
      leftshow: false
    }
    return (
      <div>
        <h2>首页</h2>
        <Navbar title='首页' leftshow={false} />

        <h2>列表</h2>
        <Navbar title='列表' />

        <h2>我的</h2>
        <Navbar title='我的' />

        <h2>测试</h2>
        <Navbar {...obj} />
      </div>
    )
  }
}
