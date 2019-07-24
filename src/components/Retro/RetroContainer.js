import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadRetro, addCardInState, getCardsFromDb } from '../../actions/retro'
import Retro from './Retro';
import Loader from '../Loader/Loader';
import CardForm from './CardForm';

class RetroContainer extends Component {
    id = this.props.match.params.id

    state = {
        type: '',
        text: ''
    }

    componentDidMount() {

        this.props.loadRetro(this.props.lobby, this.id)

    }
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.addCardInState(this.state, this.props.currentUser, this.props.retro.id, this.props.userCards)
        this.setState({
            type: '',
            text: ''
        })
    }
    submitChanges = (event) => this.props.getCardsFromDb(this.id)
    
    optionsCards = ['mad', 'sad', 'glad']
    optionsCard2 = ['stop', 'start', 'keep']
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
                
                {!this.props.cards &&
                    <div>
                        <button className='button' onClick={this.submitChanges}>submit changes</button>
                        <Retro cards={this.props.userCards} />
                        <div id='createCardFormContainer'>
                            <CardForm
                                onSubmit={this.onSubmit}
                                onChange={this.onChange}
                                values={this.state}
                                options={this.optionsCards}
                            />
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
        lobby: state.lobby,
        retro: state.retro,
        users: state.retro.users,
        userCards: state.retro.userCards,
        cards: state.retro.cardsFromDb,
    }
}
export default connect(mapStateToProps, { loadRetro, addCardInState, getCardsFromDb })(RetroContainer)