export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'))
  if (user && user.authToken) {
    return { Authorization: user.authToken }
  } else {
    return {}
  }
}