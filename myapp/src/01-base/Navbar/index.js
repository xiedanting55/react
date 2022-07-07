import React, { Component } from 'react'
import propTypes from 'prop-types'

export default class Navbar extends Component {
  // 类属性 验证
  static propTypes = {
    title: propTypes.string,
    leftshow: propTypes.bool
  }
  // 默认值
  static defaultProps = {
    leftshow: true
  }


  // 属性是从父组件传来的。this.props
  render () {
    let { title, leftshow } = this.props
    return (
      <div>
        {leftshow && <button>返回</button>}
        Navbar-{title}
        <button>home</button>
      </div>
    )
  }
}
// 类属性 验证
// Navbar.propTypes = {
//   title: propTypes.string,
//   leftshow: propTypes.bool
// }
// 默认值
// Navbar.defaultProps = {
//   leftshow: true
// }
