import request from 'superagent'
const baseUrl = 'https://salty-shelf-72145.herokuapp.com'

// const baseUrl = "http://localhost:5000";

export const USER_SUCCES = 'USER_SUCCES'
const userSucces = user => ({
  type: USER_SUCCES,
  payload: user
})

export const succesUser = (username) => (dispatch) => {
  request
    .post(`${baseUrl}/users`)
    .send({username})
    .then(response => {
      dispatch(userSucces(response.body.user.username))
    })
    .catch(console.error)
}
