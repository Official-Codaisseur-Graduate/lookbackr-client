import React from "react";
import "../stylingComponents.css";

import SignupForm from "./SignupForm";
export default function LoginForm(props) {
  const { handleChange, handleSubmit, values, onSubmitLogin, error } = props;

  return (
    <div>
      <div className="text-home">
        You’ve done it! You and your team completed an app together. Of course
        you’re happy that the work is done. But let’s take a few minutes and
        look back together. Figure out what went well and what didn’t so you can
        improve and be even better the next project.
      </div>
      <div className="form">
        <SignupForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          onSubmitLogin={onSubmitLogin}
          error={error}
          values={values}
        />
        {/* <form onSubmit={onSubmit}>
        <input name={'name'} onChange={onChange} value={values.name} placeholder='Fill your name' className='input' required/>
        <div>
          <button type='submit' className='button'>Enter</button>
        </div>
      </form> */}
      </div>
    </div>
  );
}
