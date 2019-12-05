import { SIGNEDUP, USER_SUCCES, AUTHENTICATION_JWT } from "../actions/user";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SUCCES:
      return action.payload;
    case SIGNEDUP:
      return action.payload;
    case AUTHENTICATION_JWT:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
