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
class RetroNextContainer extends Component {
  id = this.props.match.params.id

  state = {
    type: '',
    text: '',
    visibilityForm: false,
    message_submit: 'share your cards'
  }

  componentDidMount() {
    this.props.userRestart(this.props.currentUser.id, parseInt(this.id))
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

  optionsCards = ['mad', 'sad', 'glad']
  optionsCard2 = ['stop', 'start', 'keep']

  render() {
    return (
      <div className='container'>

        {!this.props.retro &&
          <Loader />
        }

        {(this.props.retro && this.props.users) &&
        <div className='userArea'>
          <div className='description'>
            <p>{this.props.retro.description}</p>
            {this.props.users.map(user => user.username + ' ')}
          </div>
        </div>
        }

        {this.props.cards &&
          <div>
            <div className='feelingsArea'>
              <div className='feelings'>
                <img src={mad} alt='mad' className='iconMad'/>
                <strong>Mad</strong> List the things that are driving you crazy. What is stopping you from performing at your best?
              </div>

              <div className='feelings'>
                <img src={sad} alt='sad' className='iconSad'/>
                <strong>Sad</strong> What are some of the things that have disappointed you or that you wished could be improved?
              </div>


              <div className='feelings'>
                <img src={glad} alt='glad' className='iconGlad'/>
                <strong>Glad</strong> What makes you happy when you think about this project? What are the elements that you enjoy the most?
              </div>
            </div>
            <Retro cards={this.props.retro.cards} users={this.props.users} />
            <div className='feelingsArea'>
              <div className='feelings'>
                <img src={start} alt='mad' className='iconMad'/>
                <strong>Start</strong> List ideas that you should be doing but are not doing, innovative ideas worth discussing to address current problems.
              </div>

              <div className='feelings'>
                <img src={stop} alt='sad' className='iconSad'/>
                <strong>Stop</strong> List ideas that are not delivering results or might be driving people a little crazy.
              </div>


              <div className='feelings'>
                <img src={keep} alt='glad' className='iconGlad'/>
                <strong>Keep</strong> List ideas that are creating value or should not be dismissed yet because the outcome is not yet known.
              </div>
            </div>
            <Retro2 cards={this.props.cards} users={this.props.users} />
          </div>
        }

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