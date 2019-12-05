import React from "react";

import "../stylingComponents.css";
import { Alert } from "react-bootstrap";

export default function SignupForm(props) {
  console.log("in Signupform: ", props.error);
  return (
    <div className="form-container">
      <form className="form" onSubmit={props.handleSubmit}>
        <input
          placeholder="Username"
          className="input"
          onChange={props.handleChange}
          type="text"
          name="username"
          value={props.values.username}
          required
        />
        <input
          placeholder="password"
          className="input"
          onChange={props.handleChange}
          type="password"
          name="password"
          value={props.values.password}
          required
        />

        <div className="buttonsContainer">
          <button type="submit" className="button">
            Sign up
          </button>

          <button className="button" onClick={props.onSubmitLogin}>
            Log in
          </button>
        </div>
      </form>

      <div>
        {props.error && <Alert variant="danger">{props.error.apiMsg}</Alert>}
      </div>
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
