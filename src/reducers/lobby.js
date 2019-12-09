import { LOBBY_FETCHED, DELETE_ROOM, DELETE_CARD } from "../actions/lobby";

const reducer = (state = null, action) => {
  switch (action.type) {
    case LOBBY_FETCHED:
      return action.payload;
    case DELETE_ROOM:
      return [...state.filter(item => item.id !== action.payload)];
    case DELETE_CARD:
      const lobbyIndex = state.findIndex(
        lobby => parseInt(lobby.id) === parseInt(action.lobbyId)
      );
      const newState = [...state];
      const filteredCards = state[lobbyIndex].cards.filter(
        card => card.id !== action.cardId
      );
      newState[lobbyIndex].cards = filteredCards;
      return newState;

    default:
      return state;
  }
};

export default reducer;
