import React, { Component } from 'react'
import { connect } from 'react-redux'
import Lobby from './Lobby'
import { fetchLobby} from '../../actions/lobby'

class LobbyContainer extends Component {
  state = {
    editMode: false,
    message: ''
  }

  componentDidMount() {
    const baseUrl = 'https://salty-shelf-72145.herokuapp.com'
    const source = new EventSource(`${baseUrl}/stream`)
    source.onmessage = this.props.fetchLobby
    
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.createRoom(this.state.formValues)
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onAdd = () => {
    this.setState({
      editMode: true,
      formValues: {
        name: '',
      }
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

export default connect(mapStateToProps, { fetchLobby })(LobbyContainer)