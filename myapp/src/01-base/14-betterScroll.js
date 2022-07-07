import React, { Component } from 'react'
import BScroll from '@better-scroll/core'

export default class App extends Component {
  state = {
    list: []
  }
  getData = () => {
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    this.setState(
      { list: list },
      () => {
        new BScroll(document.querySelector('.wrapper'))
      }
    )
  }
  render () {
    return (
      <div>
        <button onClick={() => this.getData()}>点击</button>
        <div className="wrapper" style={{ 'height': '200px', 'overflow': 'hidden' }}>
          <ul className="content">
            {
              this.state.list.map((item, index) => {
                return (
                  <li key={index}>{item}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
