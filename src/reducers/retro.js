import {  LOAD_USER_CARDS } from '../actions/retro'

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_USER_CARDS:
      return { ...state, userCards: [...action.data, action.payload] }
    default:
      return state
  }
}

