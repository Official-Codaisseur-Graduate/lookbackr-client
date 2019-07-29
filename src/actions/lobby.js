export const LOBBY_FETCHED = 'LOBBY_FETCHED'
 
export function fetchLobby (event) {
  const {data} = event
  const totalData = JSON.parse(data)

  return {
    type: LOBBY_FETCHED,
    payload: totalData
  }
}
