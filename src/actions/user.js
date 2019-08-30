import request from 'superagent'
import { baseUrl } from '../constants'

export const USER_SUCCES = 'USER_SUCCES'

const userSucces = event => ({
  type: USER_SUCCES,
  payload: event
})


export const succesUser = (username) => (dispatch) => {
  request
    .post(`${baseUrl}/users`)
    .send({username})
    .then(response => {
      console.log('RESPONSE USER:', response.body)
      dispatch(userSucces(response.body))
    })
    .catch(console.error)
}
//updates user with an object with only the id in there
export const updateUser = (userId, roomId) => (dispatch) => {
  request
    .put(`${baseUrl}/enter-room/${roomId}`)
    .send({user:{ id: userId } })
    .then(response => {
      dispatch(userSucces(response.body))
    })
    .catch(console.error)
}

//change the status of the user in done. 
export const userDone = (userId, roomId) => (dispatch) => {
  request
    .put(`${baseUrl}/room/${roomId}`)
    .send({ user: { id: userId } })
    .then(response => {
      console.log('userSucces payload:event from user-actions', response.body)
      dispatch(userSucces(response.body)) 
    })
    .catch(console.error)
}

//get's called in RetroNextContainer
export const userRestart = (userId, roomId) => (dispatch) => {
  request
    .put(`${baseUrl}/reset/${roomId}`)
    .send({ user: { id: userId } })
    .then(response => {
      console.log('UPDATED USER DONE:', response.body)
      dispatch(userSucces(response.body))
    })
    .catch(console.error)
}
