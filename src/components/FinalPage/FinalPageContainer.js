import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLobby} from '../../actions/lobby'
import FinalPage from './FinalPage'
import Loader from '../Loader/Loader'
import { baseUrl } from '../../constants'

class FinalPageContainer extends Component {
  id = this.props.match.params.id
  componentDidMount() {
      const source = new EventSource(`${baseUrl}/stream`)
      source.onmessage = this.props.fetchLobby
  }

  render() {
   

    return (
      <div className='container'>
        <FinalPage lobby={this.props.lobby}/>
      </div>
    )
  }
}



const mapStateToProps = state => ({
  retro: state.retro,
  cards: state.retro.cards,
  users: state.retro.users,
  currentUser: state.currentUser,
  userCards: state.retro.userCards,
  lobby: state.lobby
})

export default connect(mapStateToProps, { fetchLobby })(FinalPageContainer)