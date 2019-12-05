import React, { Component } from "react";
import { connect } from "react-redux";
import { succesUser } from "../../actions/user";
import UserForm from "./UserForm";
import { signup, login } from "../../actions/user";

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
    this.props.login(this.state.username, this.state.password);
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.signup(this.state.username, this.state.password);

    this.setState({
      username: "",
      password: ""
    });
  };

  /* onSubmit = event => {
    event.preventDefault();
    this.props.succesUser(this.state.name);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }; */

  render() {
    return (
      <div className="container">
        <UserForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          values={this.state}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, { signup, login })(UserFormContainer);
