import axios from 'axios';
const API_URL = 'http://localhost:3000/';
class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'users/sign_in', user)
      .then(response => {
        if (response.headers.authorization) {
          //check what response is and set user object accordingly
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem('user');
  }
  register(user) {
    return axios.post(API_URL + 'users', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}
export default new AuthService();