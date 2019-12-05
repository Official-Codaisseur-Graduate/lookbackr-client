import React from "react";
import LobbyForm from "./LobbyForm";
import { Link } from "react-router-dom";

export default function Lobby(props) {
  const {
    onAdd,
    onChange,
    onSubmit,
    values,
    onClickDelete,
    visibilityForm,
    toggleVisibility
  } = props;
  const { editMode } = values;
  const lobbyForm = (
    <LobbyForm
      onChange={onChange}
      onSubmit={onSubmit}
      visibilityForm={visibilityForm}
      toggleVisibility={toggleVisibility}
      values={values}
    />
  );
  const form = editMode && lobbyForm;

  return (
    <div>
      <div className="explanation-text">
        <p>
          Enter a room with your team to start the retrospective meeting. Or
          create a new one.
        </p>
        <button
          onClick={onAdd}
          className="button"
          style={{ marginTop: "20px" }}
        >
          Make a new room
        </button>
      </div>

      {form}
      <div>
        <div className="room-area">
          {props.lobby &&
            props.lobby.map((room, index) => (
              <div className="room-item" key={index}>
                <Link to={`/retrospectives/${room.id}`}>{room.name}</Link>
                <p>{room.description}</p>
                {room.users.length > 0 && (
                  <div id="usersBadge">
                    <h2 style={{ color: "crimson" }}>{room.users.length}</h2>
                    &nbsp;users in here
                  </div>
                )}
                {!room.users.length && (
                  <div id="usersBadgeEmpty">This room is empty</div>
                )}
                <button
                  className="buttonDelete"
                  onClick={onClickDelete(room.id)}
                ></button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
