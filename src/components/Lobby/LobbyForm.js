import React from "react";
import "../stylingComponents.css";

export default function LobbyForm(props) {
  const {
    onChange,
    onSubmit,
    values,
    toggleVisibility,
    visibilityForm
  } = props;

  return (
    <div>
      {visibilityForm && (
        <div className="form-container">
          <form className="form" onSubmit={onSubmit}>
            <input
              name={"name"}
              onChange={onChange}
              value={values.name}
              placeholder="Name of room"
              className="input"
              required
            />

            <input
              name={"description"}
              onChange={onChange}
              value={values.description}
              placeholder="Description"
              className="input"
              required
            />

            <div className="buttonsContainer">
              <button type="submit" className="button">
                Add room
              </button>
              <button onClick={toggleVisibility} className="button">
                Hide form
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
