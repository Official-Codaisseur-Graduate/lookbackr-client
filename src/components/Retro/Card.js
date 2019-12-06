import React from "react";

export default function Card(props) {
  console.log("inCard:", props.lobbyId);
  return (
    <div className={`card-item ${props.card.type}`}>
      <p>
        <strong>{props.card.text}</strong>
      </p>
      <p>{props.userName}</p>
      <button
        className="buttonDelete"
        onClick={props.cardDelete(props.card.id, props.lobbyId)}
      ></button>
    </div>
  );
}
