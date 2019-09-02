import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCardInState } from '../../actions/retro'
import { updateUser, userDone } from '../../actions/user'
import Retro from './Retro';
import Loader from '../Loader/Loader';
import CardForm from './CardForm';
import { Link } from 'react-router-dom'
import mad from '../../assets/angry-solid.svg'
import sad from '../../assets/frown-open-solid.svg'
import glad from '../../assets/laugh-beam-solid.svg'

class RetroContainer extends Component {
  id = this.props.match.params.id

  state = {
    type: '',
    text: '',
    visibilityForm: false,
    message_submit: '2 - Share your cards'
  }

  componentDidMount() {
    const userId = this.props.currentUser.id
    this.props.updateUser(userId, parseInt(this.id))
  }
//put's (event.target.name = type and event.target.value = mad, sad or glad) as the state
  onChange = (event) => {
    //console.log('event.target.name from RetroContainer', event.target.name,"and the value from Retrocontainer", event.target.value)
    this.setState({
      [event.target.name]: event.target.value
      
    })
  }
//this puts the new card in the state with userId and retroId 
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
      message_submit: 'Waiting for the next user...'
    })
  }

// shows a part or both them of the Form (mad,sad,glad or stop,start,keep)
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

        <div className='explanation-text'> You can fill in you experiences during the project.
         Wat happend that made you mad, sad or glad? <br></br>You can enter multiple items. 
         For example, two things made you glad but only one thing made you sad. 
         <br></br> When you are done filling in the items, discus them with your teammates.
        </div>

        {/* if there are no this.props.retro then you see Loading... */}
        {!this.props.retro &&
          <Loader />
        }
        {/* if the room excist and has users go on...  */}
        {(this.props.retro && this.props.users) &&
          <div className='user-area'>

            <div className='description'>
              <p>{this.props.retro.description}</p>
              {/* shows Loading... and all the users who have added cards to the room */}
              {this.joinedUser}
              {this.props.users.map(user => user.username + ', ')}
            </div>

          </div>
        }

        {/* Table with the sad, mad glad columns */}
        <div className='feelings-area'>

          <div className='feelings'>
            <img src={mad} alt='mad' className='icon-mad'/>
            <strong>Mad</strong> - List the things that where driving you crazy. What was stopping you from performing at your best?
          </div>

          <div className='feelings'>
            <img src={sad} alt='sad' className='icon-sad'/>
            <strong>Sad</strong> - What are some of the things that have disappointed you or that you wished could be improved?
          </div>

          <div className='feelings'>
            <img src={glad} alt='glad' className='icon-glad'/>
            <strong>Glad</strong> - What makes you happy when you think about the project? What are the elements that you enjoy the most?
          </div>

        </div>

        {/* the cards that are made in this room are being showed in the right columns and with the right username */}
        {this.props.cards && 
        <Retro cards={this.props.cards} users={this.props.users} />}

        {!this.props.done &&
          <div>

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

            <button className='button' onClick={this.submitChanges}>{this.state.message_submit}</button>

          </div>
        }
  {/* Link is not in RetroNextContainer! */}
        <Link to={`/retrospectives/${this.id}/next`} className='button next'>3 - Go to the next fase</Link>
       
        {this.props.done &&
          <div>

          </div>
        }
      </div>
    )
  }
}

//put these const's in the props
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

export default connect(mapStateToProps, { addCardInState, updateUser, userDone })(RetroContainer) 
