import React, { Component } from 'react'

import './css/04-index.css'

export default class App extends Component {
  render () {
    var myname = 'wpting'
    var obj = {
      background: "red"
    }
    return (
      <div>
        {/* React推荐我们使用行内样式，因为React觉得每一个组件都是一个独立的整体 */}
        <p>{10 + 20}</p>
        <p>{myname}</p>
        <p style={obj}>obj</p>
        <p style={{ color: 'red' }}>{10 > 20 ? 'aaa' : 'bbb'}</p>
        <p className='active'>active</p>
        <label htmlFor='username'>username</label>
        <input id='username' type='text' />
      </div>
    )
  }
}
