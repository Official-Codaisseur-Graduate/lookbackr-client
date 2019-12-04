import request from "superagent";
import { baseUrl } from "../constants";

export const SIGNEDUP = "SIGNEDUP";

function signedup(user) {
  return {
    type: SIGNEDUP,
    payload: user
  };
}

export const signup = data => dispatch => {
  request
    .post(`${baseUrl}/users`)
    .send(data)
    .then(res => {
      const action = signedup(res.body);
      dispatch(action);
    })
    .catch(err => console.log(err));
};

export const USER_SUCCES = "USER_SUCCES";

const userSucces = event => ({
  type: USER_SUCCES,
  payload: event
});

export const succesUser = username => dispatch => {
  request
    .post(`${baseUrl}/users`)
    .send({ username })
    .then(response => {
      console.log("RESPONSE USER:", response.body);
      dispatch(userSucces(response.body));
    })
    .catch(console.error);
};

export const updateUser = (userId, roomId) => dispatch => {
  request
    .put(`${baseUrl}/enter-room/${roomId}`)
    .send({ user: { id: userId } })
    .then(response => {
      dispatch(userSucces(response.body));
    })
    .catch(console.error);
};

export const userDone = (userId, roomId) => dispatch => {
  request
    .put(`${baseUrl}/room/${roomId}`)
    .send({ user: { id: userId } })
    .then(response => dispatch(userSucces(response.body)))
    .catch(console.error);
};

export const userRestart = (userId, roomId) => dispatch => {
  request
    .put(`${baseUrl}/reset/${roomId}`)
    .send({ user: { id: userId } })
    .then(response => {
      console.log("UPDATED USER DONE:", response.body);
      dispatch(userSucces(response.body));
    })
    .catch(console.error);
};
