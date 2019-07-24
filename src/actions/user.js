import request from 'superagent'
const baseUrl = 'https://salty-shelf-72145.herokuapp.com'

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
/*
export const USER_UPDATE = 'USER_UPDATE'

const updateSucces = (update) => ({
  type: USER_UPDATE,
  payload: update
})*/

/** This action should receive a user Id and room/retro Id 
 * It updates the specified user's retroId with the specifeid retro Id
*/
export const updateUser = (userId, roomId) => (dispatch) => {
  request
    .put(`${baseUrl}/rooms/${roomId}`)
    .send(
      {user:{id: userId}}
    )
    .then(response => {
      console.log('UPDATED USER:', response.body)
      dispatch(userSucces(response.body))
    })
    .catch(console.error)
}

//=> (dispatch)