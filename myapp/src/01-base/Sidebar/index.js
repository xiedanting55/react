/**
 * 快捷键 
 *  rfc生成函数式组件
 *  rcc生成类组件
 */
import React from 'react'
import propTypes from 'prop-types'

export default function Sidebar (props) {
  let { bg } = props
  return (
    <div style={{ 'background': bg }}>
      <ul>
        <li>aaaa</li>
        <li>bbbb</li>
        <li>cccc</li>
      </ul>
    </div>
  )
}

// Sidebar.defaultProps = {}
// Sidebar.propTypes = {}
