import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import RetroContainer from './Retro/RetroContainer';

function Routes(props) {
  return (
    <div>
       <Route path="/retrospectives/:id" exact component={RetroContainer} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
   
  }

}

export default withRouter(connect(mapStateToProps)(Routes))