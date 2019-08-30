import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCardInState } from '../../actions/retro'
import Retro from './Retro';
import { userDone, userRestart } from '../../actions/user'
import Retro2 from './Retro2';
import Loader from '../Loader/Loader';
import CardForm from './CardForm';
import start from "../../assets/play-circle-solid.svg";
import stop from "../../assets/stop-circle-solid.svg";
import keep from "../../assets/check-circle-solid.svg";
import mad from "../../assets/angry-solid.svg";
import sad from "../../assets/frown-open-solid.svg";
import glad from "../../assets/laugh-beam-solid.svg";

class GeneralRetroContainer extends Component {
  id = this.props.match.params.id

  state = {
    type: '',
    text: '',
    visibilityForm: false,
    message_submit: '2 - Share your cards'
  }

  componentDidMount() {
    this.props.userRestart(this.props.currentUser.id, parseInt(this.id))
  }
  
//same as Retrocontainer
//put's (event.target.name = type and event.target.value = mad, sad or glad) as the state
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

//same as Retrocontainer
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

//same as Retrocontainer
  submitChanges = () => {
    this.props.userDone(this.props.currentUser.id, parseInt(this.id))
    this.setState({
      message_submit: 'waiting for the next user...'
    })
  }

//same as Retrocontainer
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

//same as Retrocontainer
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

        {!this.props.retro &&
          <Loader />
        }
  {/* same as Retrocontainer */}
        {(this.props.retro && this.props.users) &&
          <div className='user-area'>
            <div className='description'>
              <p>{this.props.retro.description}</p>
  {/* shows all the users who have added cards to the room */}
              {this.props.users.map(user => user.username + ' ')}
            </div>
          </div>
        }

        {this.props.cards &&
          <div>
            <div className='feelings-area'>

              <div className='feelings'>
                <img src={mad} alt='mad' className='icon-mad'/>
                <strong>Mad</strong> - List the things that are driving you crazy. What is stopping you from performing at your best?
              </div>

              <div className='feelings'>
                <img src={sad} alt='sad' className='icon-sad'/>
                <strong>Sad</strong> - What are some of the things that have disappointed you or that you wished could be improved?
              </div>

              <div className='feelings'>
                <img src={glad} alt='glad' className='icon-glad'/>
                <strong>Glad</strong> - What makes you happy when you think about this project? What are the elements that you enjoy the most?
              </div>

            </div>

            <Retro cards={this.props.retro.cards} users={this.props.users} />
            
            <div className='feelings-area'>

              <div className='feelings'>
                <img src={stop} alt='stop' className='icon-stop'/>
                <strong>Stop</strong> - Write down your ideas or habbits that are not delivering results or might be driving people a little bit crazy.
              </div>

              <div className='feelings'>
                <img src={start} alt='start' className='icon-start'/>
                <strong>Start</strong> - List your ideas or habbits that you should be doing but are not doing or should do more often.
              </div>

              <div className='feelings'>
                <img src={keep} alt='keep' className='icon-keep'/>
                <strong>Keep</strong> - Name up your ideas or habbits that you like doing/having during the project or are creating value to you and your team.
              </div>

            </div>

            <Retro2 cards={this.props.cards} users={this.props.users} />

          </div>
        }

        {!this.props.done &&
          <div>

            <button className='button' onClick={this.submitChanges}>{this.state.message_submit}</button>
            
  {/* same as Retrocontainer */}
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

//same as Retrocontainer
//put these const's in the props
function mapStateToProps(state, ownProps) {
  const retroId = parseFloat(ownProps.match.params.id)
  const retro = state.lobby.find(retro => retro.id === retroId)
  const userCards = retro.cards.filter(card => card.userId === state.user.id)
  const cards = retro.done ? retro.cards : userCards

//same as Retrocontainer
  return {
    done: retro.done,
    retro,
    cards,
    users: retro.users,
    currentUser: state.user
  }
}

export default connect(mapStateToProps, { addCardInState, userDone, userRestart })(GeneralRetroContainer)