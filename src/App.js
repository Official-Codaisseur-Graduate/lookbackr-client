import React, { Component } from "react";
import Routes from "./components/Routes";
import { connect } from "react-redux";
import { baseUrl } from "./constants.js";
import { fetchLobby } from "./actions/lobby";
import { Link } from "react-router-dom";
import LogOut from "./components/User/LogOut";
import "./components/stylingComponents.css";

class App extends Component {
  componentDidMount() {
    const source = new EventSource(`${baseUrl}/stream`);
    source.onmessage = this.props.fetchLobby;
  }

  render() {
    return (
      <div>
        <header>
          <div id="headerContainer">
            <div className="headerSide"></div>
            <h1>
              <Link to="/retrospectives">Lookbackr App</Link>
            </h1>
            <div className="headerSide">
              {this.props.user.username && (
                <div id="loggedinContainer">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "crimson"
                    }}
                  >
                    Logged in as: &nbsp;
                    <strong> {this.props.user.username}</strong>
                  </div>
                  <LogOut />
                </div>
              )}
            </div>
          </div>
        </header>
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
