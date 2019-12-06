import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogOut from "./User/LogOut";
import logo from "../assets/LookBackr.svg";

class Header extends Component {
  render() {
    return (
      <header id="headerContainer">
        <div className="headerSide">
          {this.props.user.username && (
            <Link to={"/user"}>
              <button className="button" style={{ marginTop: 0 }}>
                Go back
              </button>
            </Link>
          )}
        </div>

        <Link to="/retrospectives">
          <img src={logo} style={{ height: "50px" }} alt="lookBacker logo" />
        </Link>

        <div className="headerSide">
          {this.props.user.username && (
            <div id="loggedinContainer">
              <div id="loggedInAs">
                Logged in as: &nbsp;
                <strong> {this.props.user.username}</strong>
              </div>
              <LogOut />
            </div>
          )}
        </div>
      </header>
    );
  }
}

export default Header;
