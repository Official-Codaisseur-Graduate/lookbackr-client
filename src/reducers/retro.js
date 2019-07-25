import { GET_RETRO, LOAD_USER_CARDS, GET_CARDS_FROM_DB, GET_NEXT_CARDS_FROM_DB, CLEAN_THE_STATE } from '../actions/retro'
const initialState = {}
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_RETRO:
            return { ...action.payload }
        case LOAD_USER_CARDS:
            return { ...state, userCards: [...action.data, action.payload] }
        case GET_CARDS_FROM_DB:
            return { ...state, ...action.payload }
        case GET_NEXT_CARDS_FROM_DB:
            return { ...state, ...action.payload }
        case CLEAN_THE_STATE:
            return { ...action.payload }
        default:
            return state
    }
}

