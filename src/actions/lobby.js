import request from 'superagent'
const baseUrl = 'https://salty-shelf-72145.herokuapp.com'


export const LOBBY_FETCHED = 'LOBBY_FETCHED'
const lobbyFetched = (rooms) => ({
  type: LOBBY_FETCHED,
  payload: rooms
})

export const fetchLobby = () => (dispatch) => {
  request(`${baseUrl}/stream`)
    .then(response => {
      console.log('RESPSTREAM', response.body)
      dispatch(lobbyFetched(response.body))
    })
    .catch(console.error)
}