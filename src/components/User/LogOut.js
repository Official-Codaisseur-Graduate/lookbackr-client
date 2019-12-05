import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/user";
import "../stylingComponents.css";

class LogOut extends Component {
  render() {
    return (
      <div id="logoutContainer">
        <button
          onClick={this.props.logout}
          className="button"
          style={{ marginTop: 0 }}
        >
          Log out
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { logout })(LogOut);
