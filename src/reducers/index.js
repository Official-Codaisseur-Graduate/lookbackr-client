import { combineReducers } from "redux";
import user from "./user";
import lobby from "./lobby";
import retro from "./retro";
import error from "./error";

export default combineReducers({
  user,
  lobby,
  retro,
  error
});
