import { LOBBY_FETCHED, DELETE_ROOM } from '../actions/lobby'
  
const reducer = (state = null, action) => {
  switch(action.type) {
    case LOBBY_FETCHED:
      return action.payload
      case DELETE_ROOM:
      return  [ ...state.filter(item => item.id !== action.payload)]
    default: 
      return state
  }
}

export default reducer

