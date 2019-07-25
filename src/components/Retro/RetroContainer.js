import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadRetro, addCardInState, getCardsFromDb, cleanTheState } from '../../actions/retro'
import { updateUser } from '../../actions/user'
import Retro from './Retro';
import Loader from '../Loader/Loader';
import CardForm from './CardForm';
import { Link } from 'react-router-dom'

class RetroContainer extends Component {
    id = this.props.match.params.id

    state = {
        type: '',
        text: '',
        visibilityForm: false
    }

    componentDidMount() {
        const userId = this.props.currentUser.id
        const userName = this.props.currentUser.username
        this.props.updateUser(userId, this.id)
        this.joinedUser = userName
        this.props.loadRetro(this.props.lobby, this.id)
        
    }
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        const userId = this.props.currentUser.id
        this.props.addCardInState(this.state, userId, this.id, this.props.userCards)
        this.setState({
            type: '',
            text: ''
        })
    }
    submitChanges = () => this.props.getCardsFromDb(this.id)

    toggleVisibility = () => {
        if (this.state.visibilityForm === true) {
            return this.setState({
                visibilityForm: false
            })
        }
        else {
            return this.setState({
                visibilityForm: true
            })
        }
    }
    componentWillUnmount() {
        this.props.cleanTheState()
    }

    joinedUser = 'Joining room...'
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
                            {console.log(this.props.users)}
                            {this.props.users.map(user => user.username + ', ')} 
                            {this.joinedUser}
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
                                visibilityForm={this.state.visibilityForm}
                                toggleVisibility={this.toggleVisibility}
                            />
                        </div>
                    </div>
                }
                {this.props.cards &&
                    <div>
                        <Link to={`/retrospectives/${this.id}/next`} className='button next'>Next</Link>
                        <Retro cards={this.props.cards} />
                    </div>
                }
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
        currentUser: state.user,
    }
}
export default connect(mapStateToProps, { loadRetro, addCardInState, getCardsFromDb, updateUser, cleanTheState })(RetroContainer)