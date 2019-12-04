import React from "react";
import { signup } from "../../actions/user";
import { connect } from "react-redux";
import "../stylingComponents.css";
//import { Link } from "react-router-dom";
//import "./SignupLogin.css";
//import Button from "@material-ui/core/Button";

class SignupForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.signup(this.state);

    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <div className="form-container">
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            placeholder="Username"
            className="input"
            onChange={this.handleChange}
            type="text"
            name="username"
            value={this.state.username}
            required
          />
          <input
            placeholder="password"
            className="input"
            onChange={this.handleChange}
            type="password"
            name="password"
            value={this.state.password}
            required
          />
          <button type="submit" className="button">
            Sign up
          </button>
        </form>
        {/* <div className="go-back-to-homepage">
          <Link to={"/events"}>
            <button className="goback-button" variant="contained">
              Back to homepage
            </button>
          </Link>
        </div> */}
      </div>
    );
  }
}

export default connect(null, { signup })(SignupForm);
