import React from "react";
import Card from "./Card";

export default function Retro2(props) {
  const showUserName = (cardUser, users) =>
    users.find(user => user.id === cardUser).username;
  return (
    <div className="board">
      <div className="retro">
        <div className="column">
          <h2 className="table-title">Stop</h2>
          {props.cards &&
            props.cards
              .filter(card => card.type === "stop")
              .map((card, index) => (
                <Card
                  card={card}
                  key={index}
                  userName={showUserName(card.userId, props.users)}
                  cardDelete={props.cardDelete}
                  lobbyId={props.lobbyId}
                  currentUserId={props.currentUserId}
                />
              ))}
        </div>
        <div className="column">
          <h2 className="table-title">Start</h2>
          {props.cards &&
            props.cards
              .filter(card => card.type === "start")
              .map((card, index) => (
                <Card
                  card={card}
                  key={index}
                  userName={showUserName(card.userId, props.users)}
                  cardDelete={props.cardDelete}
                  lobbyId={props.lobbyId}
                  currentUserId={props.currentUserId}
                />
              ))}
        </div>
        <div className="column">
          <h2 className="table-title">Keep</h2>
          {props.cards &&
            props.cards
              .filter(card => card.type === "keep")
              .map((card, index) => (
                <Card
                  card={card}
                  key={index}
                  userName={showUserName(card.userId, props.users)}
                  cardDelete={props.cardDelete}
                  lobbyId={props.lobbyId}
                  currentUserId={props.currentUserId}
                />
              ))}
        </div>
      </div>
    </div>
  );
}
