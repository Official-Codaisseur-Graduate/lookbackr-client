import * as request from "superagent";
import { baseUrl } from "../constants";

export const GET_RETRO = "GET_RETRO";
export const LOAD_USER_CARDS = "LOAD_USER_CARDS";

function displayCards(type, text, previousCards) {
  const cards = previousCards || [];
  return {
    type: LOAD_USER_CARDS,
    payload: { text, type },
    data: cards
  };
}

export const addCardInState = (
  card,
  userId,
  retroId,
  previousCards
) => dispatch => {
  console.log("in actions: ", userId);
  const data = {
    type: card.type,
    text: card.text,
    userId,
    retroId: parseInt(retroId)
  };
  request
    .post(`${baseUrl}/cards`)
    .send(data)
    .then(dispatch(displayCards(data.type, data.text, previousCards)))
    .catch(error => console.log(error));
};
