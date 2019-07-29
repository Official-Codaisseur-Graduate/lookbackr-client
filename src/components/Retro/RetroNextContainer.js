import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCardInState } from '../../actions/retro'
import Retro from './Retro'
import Retro2 from './Retro2'
import Loader from '../Loader/Loader'
import CardForm from './CardForm'
import { Link } from 'react-router-dom'

class RetroNextContainer extends Component {
  id = this.props.match.params.id
  state = {
    type: '',
    text: '',
    visibilityForm: false
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
  
  toggleVisibility = () => {
    if (this.state.visibilityForm === true) {
      return this.setState({
        visibilityForm: false
      })
    } else {
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
        {!this.props.retro && <Loader />}
        {(this.props.retro && this.props.users) &&
          <div>
            <div className='description'>
              <p>{this.props.retro.description}</p>
              {this.props.users.map(user => user.username + ' ')}
            </div>
          </div>
        }
        {this.props.cards &&
          <div>
            <Link to={`/repositories`} className='button next'>Go to the Homepage</Link>
            <Retro cards={this.props.retro.cards} />
            <Retro2 cards={this.props.cards} />
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
        users: state.retro.users,
        currentUser: state.user  
    }
}

export default connect(mapStateToProps, { addCardInState })(RetroNextContainer)

