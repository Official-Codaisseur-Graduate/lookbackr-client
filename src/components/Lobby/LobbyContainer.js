import React, { Component } from 'react'
import {connect} from 'react-redux'
import Lobby from './Lobby'
import {fetchLobby} from '../../actions/lobby'




class LobbyContainer extends Component {
  state = {
    editMode: false,
  }

  
  url = 'https://salty-shelf-72145.herokuapp.com'

  source = new EventSource(`${this.url}/streamdata/${this.props.match.params.id}`)
  
  
  source = new EventSource(`${baseUrl}/streamdata/${this.props.match.params.id}`)
  componentDidMount() {
    this.props.fetchLobby()
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
    console.log('STREAM', this.props.lobby)
  return (
    <div>
      <div>
        <Lobby 
          onSubmit={this.onSubmit} 
          onChange={this.onChange} 
          values={this.state}
          onAdd={this.onAdd}
          lobby={this.props.lobby}/>
      </div>
     
    </div>
  )
 }
}

const mapStateToProps = state => ({
  lobby: state.lobby,
  
})

export default connect(mapStateToProps, {fetchLobby})(LobbyContainer)