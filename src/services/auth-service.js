import axios from 'axios'
import authHeader from './auth-header'
const API_URL = 'http://localhost:3000/'
class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'users/sign_in', user)
      .then(response => {
        if (response.headers.authorization) {
          user = {
            ...response.data,
            authToken: response.headers.authorization
          }
          localStorage.setItem('user', JSON.stringify(user))
        }
      return response.data
    })
  }
  logout() {
    return axios
      .delete(API_URL + 'users/sign_out', { headers: authHeader() })
      .then(response => {
        if (response.status == 200) {
          localStorage.removeItem('user')
          return response.data
        } else {
          console.log(response)
        }
    })
  }
  register(user) {
    return axios
      .post(API_URL + 'users', user)
      .then(response => {
        if (response.headers.authorization) {
          return response.data
        }
      })
  }
}
export default new AuthService()