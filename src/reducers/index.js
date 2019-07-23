import {combineReducers} from 'redux'

import currentUser from './currentUser'

import retro from './retro'

export default combineReducers ({
    currentUser,
    retro
})