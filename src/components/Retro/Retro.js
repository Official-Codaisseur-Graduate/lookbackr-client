import React from "react";
import Card from "./Card";

export default function Retro(props) {
  const showUserName = (cardUser, users) => {
    const user = users.find(user => user.id === cardUser);
    return user.username;
  };
  return (
    <div className="board">
      <div className="retro">
        <div className="column">
          <h2 className="table-title">Things that made us mad...</h2>
          {props.cards &&
            props.cards
              .filter(card => card.type === "mad")
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
          <h2 className="table-title">Things that made us sad...</h2>
          {props.cards &&
            props.cards
              .filter(card => card.type === "sad")
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
          <h2 className="table-title">Things that made us glad...</h2>
          {props.cards &&
            props.cards
              .filter(card => card.type === "glad")
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
