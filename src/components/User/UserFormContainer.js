import React, { Component } from "react";
import { connect } from "react-redux";
import UserForm from "./UserForm";
import { signup, login, clearError } from "../../actions/user";

class UserFormContainer extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmitLogin = event => {
    event.preventDefault();
    this.props.clearError();
    this.props.login(this.state.username, this.state.password);
    this.setState({
      username: "",
      password: ""
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.clearError();
    this.props.signup(this.state.username, this.state.password);

    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <div className="container">
        <UserForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          onSubmitLogin={this.onSubmitLogin}
          values={this.state}
          error={this.props.error}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    error: state.error
  };
};

export default connect(mapStateToProps, { signup, login, clearError })(
  UserFormContainer
);
