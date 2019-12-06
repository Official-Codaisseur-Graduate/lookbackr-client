import React from "react";
import LobbyForm from "./LobbyForm";
import { Link } from "react-router-dom";
import ReactHover from "react-hover";

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

  const hoverOptions = {
    followCursor: true,
    shiftX: -20,
    shiftY: 20
  };

  console.log("visibility form: ", visibilityForm);

  return (
    <div>
      <div className="explanation-text">
        <p style={{ fontSize: "20px" }}>
          Enter a room with your team to start the retrospective meeting. Or
          create a new one.
        </p>
        {!visibilityForm && (
          <button
            onClick={onAdd}
            className="button"
            style={{ marginTop: "10px" }}
          >
            Create a new room
          </button>
        )}
      </div>

      {form}
      {props.lobby.length && (
        <div style={{ textAlign: "center" }}>
          {props.lobby && (
            <div style={{ fontSize: "30px", color: "#136a8a" }}>
              <strong>Existing rooms</strong>
            </div>
          )}
          <div className="room-area">
            {props.lobby &&
              props.lobby.map((room, index) => (
                <div className="room-item" key={index}>
                  <Link
                    to={`/retrospectives/${room.id}`}
                    style={{ fontSize: "25px" }}
                  >
                    {room.name}
                  </Link>
                  <p>{room.description}</p>
                  <div className="roomUsersAndBin">
                    {room.users.length > 0 && (
                      <ReactHover options={hoverOptions}>
                        <ReactHover.Trigger type="trigger">
                          <div id="usersBadge">
                            <h2 style={{ color: "crimson" }}>
                              {room.users.length}
                            </h2>
                            &nbsp;users in here
                          </div>
                        </ReactHover.Trigger>
                        <ReactHover.Hover type="hover">
                          <div className="hoverBox">
                            {room.users.map(user => (
                              <p>{user.username}</p>
                            ))}
                          </div>
                        </ReactHover.Hover>
                      </ReactHover>
                    )}
                    {!room.users.length && (
                      <div id="usersBadgeEmpty">This room is empty</div>
                    )}
                    <button
                      className="buttonDelete"
                      onClick={onClickDelete(room.id)}
                    ></button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
