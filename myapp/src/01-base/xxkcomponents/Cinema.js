import React, { Component } from 'react'
import axios from 'axios'

export default class Cinema extends Component {
  constructor() {
    super()

    axios({
      url: "https://m.maizuo.com/gateway?cityId=440100&ticketFlag=1&k=2768698",
      methods: "GET",
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1657088996464363274108929","bc":"440100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      this.setState({
        cinemasList: res.data.data.cinemas,
        oriCinemasList: res.data.data.cinemas
      })
    })
  }

  state = {
    cinemasList: [],
    oriCinemasList: []
  }

  searchCinemas = (e) => {
    let val = (e.target.value).toUpperCase()
    let newList = this.state.oriCinemasList.filter(v => (v.name.toUpperCase().includes(val)) || (v.address.toUpperCase().includes(val)))
    this.setState({
      cinemasList: newList
    })
  }
  render () {
    return (
      <div>
        <input type="text" ref="mycinemas" onInput={this.searchCinemas} />
        <ul className='cinema-list'>
          {
            this.state.cinemasList.map(item => {
              return (
                <li className="cinema-list-item" key={item.cinemaId}>
                  <p className="cinema-name">{item.name}</p>
                  <p className="cinema-address">{item.address}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
