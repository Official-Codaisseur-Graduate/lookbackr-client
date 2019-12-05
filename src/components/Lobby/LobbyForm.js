import React from "react";
import "../stylingComponents.css";

export default function LobbyForm(props) {
  const { onChange, onSubmit, values } = props;

  return (

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

        <button type="submit" className="button">
          Add
        </button>

      </form>
    </div>
  );
}
