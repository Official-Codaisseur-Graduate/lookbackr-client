import React, { Component } from 'react'
import {connect} from 'react-redux'
import {succesUser} from '../../actions/user'
import UserForm from '../User/UserForm'


class UserFormContainer extends Component {
  state = {
    name: ''
  }

onSubmit = (event) => {
 event.preventDefault()
 this.props.succesUser(this.state.name)
}

onChange = (event) => {
 this.setState({
   [event.target.name]: event.target.value
 })
}

render() {
 return (
   <div>
     <div>
        <UserForm onSubmit={this.onSubmit} onChange={this.onChange} values={this.state}/>
     </div>
     
    </div>
  )
 }
}



export default connect(null, {succesUser})(UserFormContainer)