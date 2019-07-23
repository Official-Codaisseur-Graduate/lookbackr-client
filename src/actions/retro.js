import * as request from 'superagent'
const baseUrl = 'https://salty-shelf-72145.herokuapp.com'
export const GET_RETRO = 'GET_RETRO'


function getRetro(retro) {
    return {
        type: GET_RETRO,
        payload: retro
    }
}

export function loadRetro(id) {
    
    const url = `${baseUrl}/stream`
    return async function (dispatch) {
        const response = await request(url)
        const retro = response.body
        dispatch(getRetro(retro))
    }
}

