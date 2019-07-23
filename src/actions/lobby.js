import request from 'superagent'
const baseUrl = 'https://salty-shelf-72145.herokuapp.com'
<<<<<<< HEAD

=======
//const source = new EventSource(`${baseUrl}/stream`)
>>>>>>> befe21bd995e25f03e175edd429246bbb274d368

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

<<<<<<< HEAD
export const fetchLobby = () => (dispatch) => {
  request(`${baseUrl}/stream`)
    .then(response => {
      console.log('RESPSTREAM', response.body)
      dispatch(lobbyFetched(response.body))
    })
    .catch(console.error)
}
=======

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
>>>>>>> befe21bd995e25f03e175edd429246bbb274d368
