import { SIGNEDUP, AUTHENTICATION_JWT, LOGGEDOUT } from "../actions/user";

const reducer = (state = {}, action) => {
  console.log("A C T I O N ! ! ", action);
  switch (action.type) {
    // case USER_SUCCES:
    //   return action.payload;
    case SIGNEDUP:
      return action.payload;
    case AUTHENTICATION_JWT:
      return action.payload;
    case LOGGEDOUT:
      return (state = {});
    default:
      return state;
  }
};

export default reducer;
