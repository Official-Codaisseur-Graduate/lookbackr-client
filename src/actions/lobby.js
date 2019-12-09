import * as request from "superagent";
import { baseUrl } from "../constants";

export const LOBBY_FETCHED = "LOBBY_FETCHED";

export function fetchLobby(event) {
  const { data } = event;
  const totalData = JSON.parse(data);

  return {
    type: LOBBY_FETCHED,
    payload: totalData
  };
}
export const DELETE_ROOM = "DELETE_ROOM";

export function delRoom(payload) {
  return {
    type: DELETE_ROOM,
    payload: payload
  };
}
export function deleteRoom(roomId) {
  return function(dispatch) {
    request
      .del(`${baseUrl}/room/${roomId}`)
      .then(res => {
        dispatch(delRoom(roomId));
      })
      .catch(console.error);
  };
}
export const DELETE_CARD = "DELETE_CARD";

export function delCard(cardId, lobbyId) {
  return {
    type: DELETE_CARD,
    cardId: cardId,
    lobbyId: lobbyId
  };
}
export function deleteCard(cardId, lobbyId) {
  return function(dispatch) {
    request
      .del(`${baseUrl}/card/${cardId}`)
      .then(res => {
        dispatch(delCard(cardId, lobbyId));
      })
      .catch(console.error);
  };
}
