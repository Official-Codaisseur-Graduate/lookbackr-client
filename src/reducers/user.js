import { AUTHENTICATION_JWT, LOGGEDOUT } from "../actions/user";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case AUTHENTICATION_JWT:
      return action.payload;
    case LOGGEDOUT:
      return (state = {});
    default:
      return state;
  }
};

export default reducer;
