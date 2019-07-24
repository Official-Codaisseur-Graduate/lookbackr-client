import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadRetro } from '../../actions/retro'
import Retro from './Retro';
import Loader from '../Loader/Loader';
import { fetchLobby } from '../../actions/lobby';

class RetroContainer extends Component {
    id = this.props.match.params.id
    componentDidMount() {
        // const baseUrl = 'https://salty-shelf-72145.herokuapp.com'
        // const source = new EventSource(`${baseUrl}/stream`)
        // source.onmessage = this.props.fetchLobby
        
        this.props.loadRetro(this.props.lobby, this.id)
    }

    render() {
        return (
            <div className='container'>
                {!this.props.retro &&
                    <Loader />
                }
                {(this.props.retro && this.props.users) &&
                    <div>
                        <div className='description'>
                            <p>{this.props.retro.description}</p>
                            {this.props.users.map(user => user.name + ' ')}
                        </div>
                    </div>
                }

                {this.props.cards &&
                    <Retro cards={this.props.cards} />}

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        retro: state.retro,
        cards: state.retro.cards,
        users: state.retro.users,
        currentUser: state.currentUser,
        userCards: state.retro.userCards,
        lobby: state.lobby
    }
}
export default connect(mapStateToProps, { loadRetro, fetchLobby })(RetroContainer)