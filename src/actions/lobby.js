import request from 'superagent'
const baseUrl = 'https://salty-shelf-72145.herokuapp.com'

    

export const fetchLobby = () => (dispatch) => {
  request(`${baseUrl}/stream`)
    .then(response => {
      console.log('RESPSTREAM', response.body)
      dispatch(lobbyFetched(response.body))
    })
    .catch(console.error)
}


export const LOBBY_FETCHED = 'LOBBY_FETCHED'
 
export function fetchLobby (event) {
    const {data} = event
    //deserialize array
    const totalData = JSON.parse(data)
    //data = the array of ALL the data sent
 
    return {
        type: LOBBY_FETCHED,
        payload: totalData
    }
}
