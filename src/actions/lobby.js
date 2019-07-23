import request from 'superagent'
const baseUrl = 'https://salty-shelf-72145.herokuapp.com'
//const source = new EventSource(`${baseUrl}/stream`)

// export const LOBBY_FETCHED = 'LOBBY_FETCHED'
// const lobbyFetched = (rooms) => {
 
//   return {
//     type: LOBBY_FETCHED,
//     payload: rooms
//   }
// }


// export function fetchLobby() {
  
//   const url = `${baseUrl}/stream`
  
//   return async function (dispatch) {
    
//       const response = await request(url)
      
//       const retros = response.body
//       dispatch(lobbyFetched(retros))
//   }
// }


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
