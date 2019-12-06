import React, { Component } from "react";
import Routes from "./components/Routes";
import { connect } from "react-redux";
import { baseUrl } from "./constants.js";
import { fetchLobby } from "./actions/lobby";
import Header from "./components/Header";
import "./components/stylingComponents.css";

class App extends Component {
  componentDidMount() {
    const source = new EventSource(`${baseUrl}/stream`);
    source.onmessage = this.props.fetchLobby;
  }

  render() {
    return (
      <div>
        <Header user={this.props.user} />
        <div className="App">
          <Routes />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lobby: state.lobby,
  user: state.user
});

export default connect(mapStateToProps, { fetchLobby })(App);
