import {combineReducers} from 'redux'
import user from './user'
import lobby from './lobby'
import retro from './retro'

export default combineReducers ({
    user,
    lobby,
    retro
})


