export default (state = null, action) => {
  if (action.type === "FAILIUREHANDLER") {
    return { apiRes: action.apiResponse, apiMsg: action.apiMessage };
  }
  if (action.type === "CLEARERROR") {
    return null;
  }

  return state;
};
