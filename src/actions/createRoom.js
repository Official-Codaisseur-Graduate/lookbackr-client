import request from "superagent"
import { baseUrl } from '../constants'

export const ADD_ROOM = "ADD_ROOM"

const addRoom = room => ({
  type: ADD_ROOM,
  payload: room
})

export const createRoom = (name, description, active) => (dispatch) => {
  const room = {
    name,
    description,
    active
  }
  return request
    .post(`${baseUrl}/rooms`)
    .send(room)
    .then(res => dispatch(addRoom(res.body)))
    .catch(console.error)
}
