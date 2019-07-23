import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'



function Routes(props) {
  return (
    <div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
   
  }

}

export default withRouter(connect(mapStateToProps)(Routes))