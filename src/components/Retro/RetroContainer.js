import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCardInState } from '../../actions/retro'
import { updateUser, userDone } from '../../actions/user'
import Retro from './Retro';
import Loader from '../Loader/Loader';
import CardForm from './CardForm';
import { Link } from 'react-router-dom'

class RetroContainer extends Component {
    id = this.props.match.params.id
    state = {
        type: '',
        text: '',
        visibilityForm: false,
        message_submit: 'share your cards'
    }
    componentDidMount() {
        const userId = this.props.currentUser.id
        this.props.updateUser(userId, parseInt(this.id))
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
    submitChanges = () => {
        this.props.userDone(this.props.currentUser.id, parseInt(this.id))
        this.setState({
            message_submit: 'waiting for the next user...'
        })
    }
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
                            {this.props.users.map(user => user.username + ', ')}
                            {this.joinedUser}
                        </div>
                    </div>
                }
                {this.props.cards && <Retro cards={this.props.cards} users={this.props.users}/>}
                {!this.props.done &&
                    <div>
                        <button className='button' onClick={this.submitChanges}>{this.state.message_submit}</button>
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
                <Link to={`/retrospectives/${this.id}/next`} className='button next'>go to the next fase</Link>
                {this.props.done &&
                    <div>
                         
                    </div>
                }
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    const retroId = parseFloat(ownProps.match.params.id)
    const retro = state.lobby.find(retro => retro.id === retroId)
    const userCards = retro.cards.filter(card => card.userId === state.user.id)
    const cards = retro.done ? retro.cards : userCards
    
    return {
        done: retro.done,
        retro,
        cards,
        users: retro.users,
        currentUser: state.user
    }
}
export default connect(mapStateToProps, { addCardInState, updateUser, userDone })(RetroContainer) 