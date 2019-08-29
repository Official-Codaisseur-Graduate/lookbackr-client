import * as request from "superagent";
import {baseUrl} from "../constants";

export const LOBBY_FETCHED = 'LOBBY_FETCHED'
 
export function fetchLobby (event) {
  const {data} = event
  const totalData = JSON.parse(data)

  return {
    type: LOBBY_FETCHED,
    payload: totalData
  }
}
export const DELETE_ROOM = "DELETE_ROOM"

export function delRoom(payload) {
  return {
    type: DELETE_ROOM,
    payload: payload
  }
}
export function deleteRoom(roomId) {
  return function (dispatch) {
    request
        .del(`${baseUrl}/room/${roomId}`)
        .then(res => {
          dispatch(delRoom(roomId))
        })
        .catch(console.error)
  }
}