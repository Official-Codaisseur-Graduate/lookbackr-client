import {combineReducers} from 'redux'
import user from './user'
import lobby from './lobby'
import currentUser from './currentUser'
import retro from './retro'

export default combineReducers ({
    user,
    lobby,
    currentUser,
    retro
})


