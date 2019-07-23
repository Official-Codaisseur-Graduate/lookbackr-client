import React, { Component } from 'react'
import store from './store'
import {Provider} from 'react-redux'
import Routes from './components/Routes'

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <div>
        <Routes/>
      </div>
    </Provider>
    )
  }
}
