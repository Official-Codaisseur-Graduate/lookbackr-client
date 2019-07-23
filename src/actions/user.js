import request from 'superagent'
const baseUrl = 'http://localhost:4000'

export const USER_SUCCES = 'USER_SUCCES'
const userSucces = event => ({
  type: USER_SUCCES,
  payload: event
})
export const succesUser = (name) => (dispatch) => {
  request
    .post(`${baseUrl}/user`)
    .send({name})
    .then(response => {
      console.log('RESPONSE', response.body)
      dispatch(userSucces(response.body))

    })
    .catch(console.error)
}