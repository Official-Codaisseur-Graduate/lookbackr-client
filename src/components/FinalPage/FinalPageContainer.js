import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLobby} from '../../actions/lobby'
import FinalPage from './FinalPage'
import Loader from '../Loader/Loader'

class FinalPageContainer extends Component {
  id = this.props.match.params.id
  componentDidMount() {
      const baseUrl = 'https://salty-shelf-72145.herokuapp.com'
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
  lobby: state.lobby
})

export default connect(mapStateToProps, { fetchLobby })(FinalPageContainer)