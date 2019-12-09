import React from "react";
import "../stylingComponents.css";

import SignupForm from "./SignupForm";
export default function LoginForm(props) {
  const { handleChange, handleSubmit, values, onSubmitLogin, error } = props;

  return (
    <div>
      <div className="text-home">
        <h3>
          <strong>You’ve done it!</strong>
        </h3>
        <br />
        You and your team completed an app together!
        <br />
        Of course you’re happy that the work is done, but before you move on
        let’s take a few minutes and look back together. Try to figure out what
        went well and what didn’t so you can refine your skills and make the
        next project even better!
      </div>
      <div className="form">
        <SignupForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          onSubmitLogin={onSubmitLogin}
          error={error}
          values={values}
        />
      </div>
    </div>
  );
}
