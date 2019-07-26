import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadRetro, addCardInState, getNextCardsFromDb} from '../../actions/retro'
import Retro from './Retro';
//import { updateUser } from '../../actions/user'
import Retro2 from './Retro2';
import Loader from '../Loader/Loader';
import CardForm from './CardForm';
import { Link } from 'react-router-dom'

class RetroNextContainer extends Component {
    id = this.props.match.params.id

    state = {
        type: '',
        text: '',
        visibilityForm: false
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
        
        const userId = this.props.currentUser.id
        
        this.props.addCardInState(this.state, userId, this.id, this.props.userCards)
        this.setState({
            type: '',
            text: ''
        })
    }
    submitChanges = () => this.props.getNextCardsFromDb(this.id)

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
                            {this.props.users.map(user => user.username + ' ')}
                        </div>
                        <Retro cards={this.props.retro.cards} />
                    </div>
                }
                {!this.props.cardsNext &&
                    <div>
                        <button className='button' onClick={this.submitChanges}>submit changes</button>
                        <Retro2 cards={this.props.userCards} />
                        <div id='createCardFormContainer'>
                            <CardForm
                                onSubmit={this.onSubmit}
                                onChange={this.onChange}
                                values={this.state}
                                options={this.optionsCard2}
                                visibilityForm={this.state.visibilityForm}
                                toggleVisibility={this.toggleVisibility}
                            />
                        </div>
                    </div>
                }
                {this.props.cardsNext &&
                    <div>
                        <Retro2 cards={this.props.cardsNext} />
                        <Link to={`/result/${this.id}`} className='button next'>submit</Link>
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
        cardsNext: state.retro.nextCardsFromDb,
        currentUser: state.user,
    }
}
export default connect(mapStateToProps, { loadRetro, addCardInState, getNextCardsFromDb })(RetroNextContainer)