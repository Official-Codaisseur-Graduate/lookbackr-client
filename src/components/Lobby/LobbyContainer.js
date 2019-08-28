import React, { Component } from 'react'
import { connect } from 'react-redux'
import Lobby from './Lobby'
import { createRoom } from '../../actions/createRoom'

class LobbyContainer extends Component {
  state = {
    editMode: false,
    name: '',
    description: '',
    active: true
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
        <div className='container'>
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

export default connect(mapStateToProps, { createRoom })(LobbyContainer)