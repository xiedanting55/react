import React, { Component } from 'react'

class Navbar extends Component {
  render () {
    return (
      <div>Navbar</div>
    )
  }
}

function Swiper () {
  return (
    <div>Swiper</div>
  )
}

export default class App extends Component {
  render () {
    return (
      <div>
        app
        <Navbar></Navbar>
        <Swiper></Swiper>
      </div>
    )
  }
}
