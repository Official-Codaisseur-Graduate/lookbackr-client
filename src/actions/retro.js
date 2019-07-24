import * as request from 'superagent'
const baseUrl = 'https://salty-shelf-72145.herokuapp.com'
export const GET_RETRO = 'GET_RETRO'


function getRetro(retro) {
    return {
        type: GET_RETRO,
        payload: retro
    }
}

export function loadRetro(data, id) {

    return function (dispatch) {
        const retro = data.find(room => room.id === parseFloat(id))
       
        dispatch(getRetro(retro))
    }
}

