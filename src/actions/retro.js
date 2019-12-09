import * as request from "superagent";
import { baseUrl } from "../constants";

export const GET_RETRO = "GET_RETRO";
export const LOAD_USER_CARDS = "LOAD_USER_CARDS";

function displayCards(id, type, text, previousCards) {
  const cards = previousCards || [];
  return {
    type: LOAD_USER_CARDS,
    payload: { id, text, type },
    data: cards
  };
}

export const addCardInState = (
  card,
  userId,
  retroId,
  previousCards
) => dispatch => {
  const data = {
    type: card.type,
    text: card.text,
    userId,
    retroId: parseInt(retroId)
  };
  request
    .post(`${baseUrl}/cards`)
    .send(data)
    .then(data => JSON.parse(data.text))
    .then(card => {
      dispatch(displayCards(card.id, card.type, card.text, previousCards));
    })
    .catch(error => console.log(error));
};
