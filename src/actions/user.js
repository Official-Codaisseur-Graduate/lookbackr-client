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