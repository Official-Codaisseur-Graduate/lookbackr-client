import React, { Component } from 'react'
import Routes from './components/Routes'
import { connect } from 'react-redux'
import { baseUrl } from './constants.js'
import { fetchLobby } from './actions/lobby'


class App extends Component {
  componentDidMount() {
    const source = new EventSource(`${baseUrl}/stream`)
    source.onmessage = this.props.fetchLobby
  }

  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    )
  }
}


const mapStateToProps = state => ({
  lobby: state.lobby,
})

export default connect(mapStateToProps, { fetchLobby })(App)