/**
 * 封装 axios 请求模块
 */
import axios from "axios"
// import store from "@/store"
const request = axios.create({
  baseURL: "http://geek.itheima.net" // 基础路径
})
request.interceptors.request.use((config) => {
  // const { user } = store.state.user
  // if (user && user.token) {
  //   config.headers.Authorization = `Bearer ${user.token}`
  // }
  return config
})
request.interceptors.response.use((res) => {
  return res.data
}), (error) => {
  return Promise.reject(new Error('faile'))
}
export default request