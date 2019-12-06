import request from "superagent";
import { baseUrl } from "../constants";
export const FAILIUREHANDLER = "FAILIUREHANDLER";
export const CLEARERROR = "CLEARERROR";
export const SIGNEDUP = "SIGNEDUP";
export const LOGGEDOUT = "LOGGEDOUT";

// function signedup(user) {
//   return {
//     type: SIGNEDUP,
//     payload: user
//   };
// }

export const signup = (username, password) => dispatch => {
  const data = { username: username, password: password };
  request
    .post(`${baseUrl}/users`)
    .send(data)
    .then(response => {
      dispatch(login(username, password));
    })

    .catch(err => {
      console.log(err);
      dispatch({
        type: FAILIUREHANDLER,
        apiResponse: err.status,
        apiMessage: "User already exists"
      });
    });
};
export const AUTHENTICATION_JWT = "AUTHENTICATION_JWT";

export function jwt(jwt, username, userId) {
  return {
    type: AUTHENTICATION_JWT,
    payload: { jwt: jwt, username: username, userId: userId }
  };
}
export const login = (username, userpw) => dispatch => {
  const data = { username: username, password: userpw };

  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      dispatch(jwt(response.body.jwt, username, response.body.userId));
    })
    .catch(err => {
      dispatch({
        type: FAILIUREHANDLER,
        apiResponse: err.status,
        apiMessage: "Invalid username or password"
      });
    });
};

function removeUser() {
  console.log("removeUser");
  return {
    type: LOGGEDOUT
  };
}

export const logout = () => dispatch => {
  dispatch(removeUser());
};

export const updateUser = (userId, roomId) => (dispatch, getState) => {
  console.log("what is roomId?:", roomId);
  const state = getState();
  const { user } = state;
  request
    .put(`${baseUrl}/enter-room/${roomId}`)
    .set({ authorization: `Bearer ${user.jwt}` })
    .send({ user: { id: userId } })

    .catch(console.error);
};

export const userDone = (userId, roomId) => dispatch => {
  request
    .put(`${baseUrl}/room/${roomId}`)
    .send({ user: { id: userId } })
    // .then(response => dispatch(userSucces(response.body)))
    .catch(console.error);
};

export const userRestart = (userId, roomId) => dispatch => {
  request
    .put(`${baseUrl}/reset/${roomId}`)
    .send({ user: { id: userId } })
    .then(response => {
      console.log("UPDATED USER DONE:", response.body);
      // dispatch(userSucces(response.body));
    })
    .catch(console.error);
};

export const clearError = () => {
  return {
    type: CLEARERROR
  };
};
