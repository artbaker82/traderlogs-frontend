import axios from 'axios'
const API_URL = 'http://localhost:3000/'
class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'users/sign_in', user)
      .then(response => {
        if (response.headers.authorization) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data
      })
  }
  logout() {
    localStorage.removeItem('user')
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