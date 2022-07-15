const TokenKey = 'hrsaas-ihrm-token'
const timeKey = 'hrsaas-timestamp-token'

export function getToken() {
  return localStorage.getItem(TokenKey)
}

export function setToken(token) {
  return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return localStorage.removeItem(TokenKey)
}
export function getTimeStamp() {
  return localStorage.getItem(timeKey)

}
export function setTimeStamp() {
  return localStorage.setItem(timeKey, Date.now())
}
