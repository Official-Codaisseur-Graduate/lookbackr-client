import { LOBBY_FETCHED } from '../actions/lobby'
  
const reducer = (state = null, action) => {
  switch(action.type) {
   
    case LOBBY_FETCHED:
      return action.payload
    default: 
      return state
  }
}

export default reducer