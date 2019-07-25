
export const LOBBY_FETCHED = 'LOBBY_FETCHED'
 
export function fetchLobby (event) {
    const {data} = event
    //deserialize array
    const lobby = JSON.parse(data)
    //data = the array of ALL the data sent
 
    return {
        type: LOBBY_FETCHED,
        payload: {lobby}
    }
}
