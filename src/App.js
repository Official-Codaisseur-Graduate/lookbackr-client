import React, { Component } from "react";
import Routes from "./components/Routes";
import { connect } from "react-redux";
import { baseUrl } from "./constants.js";
import { fetchLobby } from "./actions/lobby";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  componentDidMount() {
    const source = new EventSource(`${baseUrl}/stream`);
    source.onmessage = this.props.fetchLobby;
  }

  render() {
    return (
      <div>
        <header>
          <h1>
            <Link to="/retrospectives">Lookbackr App</Link>
          </h1>
        </header>
        <div className="App">
          <Routes />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lobby: state.lobby
});

export default connect(mapStateToProps, { fetchLobby })(App);
