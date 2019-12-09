import React from "react";
import ReactHover from "react-hover";

const hoverOptions = {
  followCursor: true,
  shiftX: -20,
  shiftY: 20
};

export default function Card(props) {
  const deleteBtn =
    props.currentUserId === props.card.userId ? (
      <ReactHover options={hoverOptions}>
        <ReactHover.Trigger type="trigger">
          <button
            className="buttonDelete"
            onClick={props.cardDelete(props.card.id, props.lobbyId)}
          ></button>
        </ReactHover.Trigger>
        <ReactHover.Hover type="hover">
          <div className="hoverBox">delete this card</div>
        </ReactHover.Hover>
      </ReactHover>
    ) : null;
  return (
    <div className={`card-item ${props.card.type}`}>
      <div>
        <p>
          <strong>{props.card.text}</strong>
        </p>
        <p>by:&nbsp;{props.userName}</p>
      </div>

      {deleteBtn}
    </div>
  );
}
