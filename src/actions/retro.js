import * as request from 'superagent'

export const GET_RETRO = 'GET_RETRO'

function getRetro(retro) {
    return {
        type: GET_RETRO,
        payload: retro
    }
}

export function loadRetro(id) {
    
    const url = `http://localhost:5000/test/${id}`
    return async function (dispatch) {
        const response = await request(url)
        const retro = response.body
        dispatch(getRetro(retro))
    }
}

