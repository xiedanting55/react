import React from 'react'

class App extends React.Component {
  state = {
    list: [111, 222, 333]
  }
  render () {
    return (
      <div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default App