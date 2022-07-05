import React, { Component } from 'react'

export default class App extends Component {
  state = {
    list: []
  }
  add = () => {
    this.state.list.push({
      id: this.state.list.length,
      value: this.refs.mytext.value
    })
    this.setState({
      list: this.state.list
    })
    this.refs.mytext.value = ""
  }
  del = (id) => {
    this.setState({
      list: this.state.list.filter(v => v.id !== id)
    })
  }
  render () {
    return (
      <div>
        <div className="form">
          <input type="text" ref="mytext" />
          <button onClick={this.add}>add</button>
        </div>
        {
          this.state.list.length > 0 ? (
            <ul>
              {
                this.state.list.map((item, index) => {
                  return (
                    <li key={item.id}>
                      {/* dangerouslySetInnerHTML 富文本编辑器 */}
                      <span dangerouslySetInnerHTML={{ __html: item.value }}></span>
                      <button onClick={() => this.del(item.id)}>删除</button>
                    </li>
                  )
                })
              }
            </ul>
          ) : (
            <div>暂无代办事项</div>
          )
        }
      </div>
    )
  }
}
