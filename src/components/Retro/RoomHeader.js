import React from "react";
import Loader from "../Loader/Loader";

const RoomHeader = props => {
  console.log("roomheader props ", props);
  return (
    <div className="room-header">
      <div className="room-header-sidebox">
        <h2>Project title</h2>
        <div style={{ margin: "20px", fontSize: "18px" }}>
          {props.retro.description}
        </div>
      </div>
      <div className="room-header-text">
        <h2>
          Welcome to room: <i>{props.retro.name}</i>
        </h2>

        <div className="explanation-text">
          {" "}
          Share your experiences of the project you have just completed. What
          happend that made you <strong>mad</strong>, <strong>sad</strong> or{" "}
          <strong>glad</strong>? You can enter multiple items. For example,
          maybe two things made you glad but only one thing made you sad. When
          you are done filling in the items, share and discuss them with your
          teammates.
        </div>
      </div>
      {!props.retro && <Loader />}

      {props.retro && props.users && (
        <div className="room-header-sidebox">
          <h2>Contributors</h2>
          <div style={{ margin: "20px", textAlign: "left" }}>
            {props.users.map(user => (
              <p style={{ fontSize: "18px" }} key={user.id}>
                • {user.username}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomHeader;
