import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCardInState } from '../../actions/retro'
import Retro from './Retro';
import { userDone, userRestart } from '../../actions/user'
import Retro2 from './Retro2';
import Loader from '../Loader/Loader';
import CardForm from './CardForm';
import { Link } from 'react-router-dom'

class RetroNextContainer extends Component {
  id = this.props.match.params.id
//Same as RetroContainer
  state = {
    type: '',
    text: '',
    visibilityForm: false,
    message_submit: 'share your cards'
  }
//uses different action then RetroContainer (that uses updateUser) the action uses different eindpoint
  componentDidMount() {
    this.props.userRestart(this.props.currentUser.id, parseInt(this.id))
  }

//Same as RetroContainer
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

//Same as RetroContainer
  onSubmit = (event) => {
    event.preventDefault()
    const userId = this.props.currentUser.id
    this.props.addCardInState(this.state, userId, this.id, this.props.userCards)
    this.setState({
      type: '',
      text: ''
    })
  }

//Same as RetroContainer
  submitChanges = () => {
    this.props.userDone(this.props.currentUser.id, parseInt(this.id))
    this.setState({
      message_submit: 'Waiting for the next user...'
    })
  }

//Same as RetroContainer
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
//No joinedUser = 'Joinging room....'
  optionsCards = ['mad', 'sad', 'glad']
  optionsCard2 = ['stop', 'start', 'keep']

  render() {
    return (
      <div className='container'>
  {/* No explenation-text (RetroContainer has the text) */}

        {!this.props.retro &&
          <Loader />
        }

        {(this.props.retro && this.props.users) &&
          <div className='description'>
            <p>{this.props.retro.description}</p>
  {/* no loading... */}
  {/* Shows all the users who have added cards to the room */}
            {this.props.users.map(user => user.username + ' ')}
          </div>
        }
  {/* Link to /repositories and link to Retro2 is not in RetroContainer */}
        {this.props.cards &&
          <div>
            <Link to={`/repositories`} className='button next'>Go to the Homepage</Link>
            <Retro cards={this.props.retro.cards} users={this.props.users} />
            <Retro2 cards={this.props.cards} users={this.props.users} />
          </div>
        }
  {/* same as RetroContainer (but without button with link) */}
        {!this.props.done &&
          <div>
            <button className='button' onClick={this.submitChanges}>{this.state.message_submit}</button>
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
      </div>
    )
  }
}
//same as RetroContainer
function mapStateToProps(state, ownProps) {
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

export default connect(mapStateToProps, { addCardInState, userDone, userRestart })(RetroNextContainer)