import request from 'superagent'
const baseUrl = 'http://localhost:5000'

export const LOBBY_FETCHED = 'LOBBY_FETCHED'
const lobbyFetched = (rooms) => ({
  type: LOBBY_FETCHED,
  payload: rooms
})

export const fetchLobby = () => (dispatch) => {
  request(`${baseUrl}/test`)
    .then(response => {
      dispatch(lobbyFetched(response.body))
    })
    .catch(console.error)
}