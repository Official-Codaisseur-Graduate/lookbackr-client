import React, { Component } from 'react'
import store from './store'
import {Provider} from 'react-redux'
import Routes from './components/Routes'

function App() {
  return (
     <Provider store={store}>
      <div>
        <Routes/>
      </div>
    </Provider>
  );
}
export default class App extends Component 

