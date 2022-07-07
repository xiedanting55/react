import React, { Component } from 'react'
import './css/12-选项卡.css'

import Film from './xxkcomponents/Film'
import Cinema from './xxkcomponents/Cinema'
import Mine from './xxkcomponents/Mine'

export default class App extends Component {
  state = {
    list: [
      { id: 0, name: '电影' },
      { id: 1, name: '影院' },
      { id: 2, name: '我的' }
    ],
    current: 0
  }

  changeStatus = (id) => {
    this.setState({
      current: id
    })
  }
  render () {
    return (
      <div>
        {this.state.current === 0 && <Film />}
        {this.state.current === 1 && <Cinema />}
        {this.state.current === 2 && <Mine />}
        <ul className='footer'>
          {
            this.state.list.map(item => {
              return (
                <li
                  className={this.state.current === item.id ? 'active' : ''}
                  key={item.id}
                  onClick={() => this.changeStatus(item.id)}
                >{item.name}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
