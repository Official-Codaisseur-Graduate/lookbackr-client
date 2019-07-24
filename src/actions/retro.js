import * as request from 'superagent'
const baseUrl = 'https://salty-shelf-72145.herokuapp.com'

export const GET_RETRO = 'GET_RETRO'
export const LOAD_USER_CARDS = 'LOAD_USER_CARDS'

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

function displayCards(type, text, previousCards) {
    console.log(previousCards)
    const cards = previousCards || []
    return {
        type: LOAD_USER_CARDS,
        payload : {text, type}, 
        data : cards
    }
}

export const addCardInState = (card, userId, retroId, previousCards) => (dispatch) => {
    const data = {
        type: card.type,
        text: card.text,
        userId, 
        retroId
    }
    
    request
        .post(`${baseUrl}/cards`)
        .send(data)
        .then(dispatch(displayCards(data.type, data.text, previousCards)))
        .catch(error => {
            console.log(error)
        })
}

