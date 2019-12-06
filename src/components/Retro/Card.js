import React from "react";

export default function Card(props) {
  return (
    <div className={`card-item ${props.card.type}`}>
      <p>
        <strong>{props.card.text}</strong>
      </p>
      <p>by:&nbsp;{props.userName}</p>
    </div>
  );
}
