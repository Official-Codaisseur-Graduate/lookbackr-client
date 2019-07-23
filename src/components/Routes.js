import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import UserFormContainer from './User/UserFormContainer'
import LobbyContainer from './Lobby/LobbyContainer'


function Routes(props) {
  return (
    <div>
      <Switch>
      <Route path="/user" exact component={UserFormContainer} />
      <Route path="/retrospectives" exact component={LobbyContainer} />
      {/* <Route path="" render={() => <Redirect to="/login" />} /> */}
    </Switch> 
    </div>
  )
}

const mapStateToProps = state => {
  return {
   
  }

}

export default withRouter(connect(mapStateToProps)(Routes))