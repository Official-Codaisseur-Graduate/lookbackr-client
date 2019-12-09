import React from "react";
import "../stylingComponents.css";

export default function SignupForm(props) {
  return (
    <div className="form-container">
      <form className="form" onSubmit={props.handleSubmit}>
        <input
          placeholder="username"
          className="input"
          maxLength="15"
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
        <div className="error-message">{props.error && props.error.apiMsg}</div>
      </form>
    </div>
  );
}
