import React, { Component } from 'react'
import { connect } from 'react-redux'
import Lobby from './Lobby'
import { fetchLobby } from '../../actions/lobby'
import { createRoom } from '../../actions/createRoom'
import { baseUrl } from '../../constants'

class LobbyContainer extends Component {
  state = {
    editMode: false,
    name: '',
    description: '',
    active: true
  }

  componentDidMount() {
    const source = new EventSource(`${baseUrl}/stream`)
    source.onmessage = this.props.fetchLobby
  }

  onSubmit = (event) => {
    event.preventDefault()
    const { name, description, active } = this.state
    this.props.createRoom(name, description, active)
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onAdd = () => {
    this.setState({
      editMode: true
    })
  }

  render() {
    return (

      <div>
        <div>
          <Lobby
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
            onAdd={this.onAdd}
            lobby={this.props.lobby} />
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  lobby: state.lobby,
})

export default connect(mapStateToProps, { fetchLobby, createRoom })(LobbyContainer)