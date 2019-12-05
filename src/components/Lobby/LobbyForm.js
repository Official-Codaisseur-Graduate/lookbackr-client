import React from "react";
import "../stylingComponents.css";

export default function LobbyForm(props) {
  const { onChange, onSubmit, values } = props;

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <div className="form-lines">
          <input
            name={"name"}
            onChange={onChange}
            value={values.name}
            placeholder="Name of room"
            className="input"
            required
          />
        </div>
        <div className="form-lines">
          <textarea
            name={"description"}
            onChange={onChange}
            value={values.description}
            placeholder="Description"
            className="input"
            required
          />
        </div>
        <div className="form-lines">
          <button type="submit" className="button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
