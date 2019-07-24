
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
