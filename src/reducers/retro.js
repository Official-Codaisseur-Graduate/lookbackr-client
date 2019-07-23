import {GET_RETRO} from '../actions/retro'
const initialState = {}
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_RETRO :
            return {...action.payload}
        default:
            return state
    }
}

