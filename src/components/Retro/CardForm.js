import React from "react";
export default function CardForm(props) {
  return (
    <div>
      {props.visibilityForm && (
        <div>
          <div className="form-container">
            <form
              id="createCard"
              onSubmit={props.onSubmit}
              onChange={props.onChange}
            >
              <br />
              <div style={{ textAlign: "center" }}>
                <h2>Add a card!</h2>
              </div>

              <select
                value={props.values.type}
                name="type"
                onChange={props.onChange}
                className="input"
                required
              >
                <option value=""> Choose card type</option>
                {props.options.map((option, index) => (
                  <option value={option} key={index} id={index}>
                    {option}
                  </option>
                ))}
              </select>

              <textarea
                type="text"
                name="text"
                value={props.values.text}
                onChange={props.onChange}
                placeholder="Why are you feeling this way?"
                className="input"
                required
              />

              <div className="buttonsContainer">
                <button type="submit" className="button">
                  Add card
                </button>
                <button onClick={props.toggleVisibility} className="button">
                  Hide form
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {!props.visibilityForm && (
        <button
          onClick={props.toggleVisibility}
          className="button"
          style={{ marginTop: "20px" }}
        >
          1 - Add cards
        </button>
      )}
    </div>
  );
}
