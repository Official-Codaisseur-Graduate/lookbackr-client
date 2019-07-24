//import superagent
import request from "superagent";
export const ADD_ROOM = "ADD_ROOM";

// const baseUrl = "http://localhost:5000";
const baseUrl = 'https://salty-shelf-72145.herokuapp.com'

const addRoom = room => ({
  type: ADD_ROOM,
  payload: room
});

export const createRoom = (name, description, active) => (dispatch) => {

  const room = {
    name,
    description,
    active
  };

  return request
    .post(`${baseUrl}/rooms`)
    .send(room)
    .then(res => {
      dispatch(addRoom(res.body));
    })
    .catch(console.error);
};
