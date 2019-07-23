import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import UserFormContainer from './User/UserFormContainer'
import LobbyContainer from './Lobby/LobbyContainer'
import RetroContainer from './Retro/RetroContainer';


function Routes(props) {
  return (
    <div>

   
      <Route path="/user" exact component={UserFormContainer} />
      <Route path="/retrospectives" exact component={LobbyContainer} />
      {/* <Route path="" render={() => <Redirect to="/login" />} /> */}
      <Route path="/retrospectives/:id" exact component={RetroContainer} />

    </div>
  )
}

const mapStateToProps = state => {
  return {
   
  }

}

export default withRouter(connect(mapStateToProps)(Routes))