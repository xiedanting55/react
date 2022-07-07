import React, { Component } from 'react'
import axios from 'axios'

export default class Film extends Component {
  constructor() {
    super()

    axios({
      url: "https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=8143687",
      methods: "GET",
      headers: {
        'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.2.0", "e": "1657088996464363274108929", "bc": "440100" }',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      this.setState({
        filmList: res.data.data.films
      })
    })
  }

  state = {
    filmList: []
  }
  render () {
    return (
      <div>Film</div>
    )
  }
}
