import { getInfo, getUserDetailById, login } from "@/api/user"
import { resetRouter } from "@/router"
import { getToken, removeToken, setTimeStamp, setToken } from "@/utils/auth"

export default {
  namespaced: true,
  state: {
    token: getToken(),
    userInfo: {}
  },
  mutations: {
    // 保存token
    SETTOKEN(state, token) {
      state.token = token
      setToken(token)
    },
    // 删除token
    DELTOKEN(state) {
      state.token = null,
        removeToken()
    },
    // 保存用户信息
    SAVEUSERINFO(state, data) {
      state.userInfo = { ...data }
    },
    // 删除用户信息
    DELUSERINFO(state) {
      state.userInfo = {}
    }
  },
  actions: {
    // 登录
    async login({ commit }, data) {
      // 经过响应拦截器的处理之后 这里的result实际上就是 token
      const result = await login(data) // 实际上就是一个promise  result就是执行的结果
      // axios默认给数据加了一层data
      // 表示登录接口调用成功 也就是意味着你的用户名和密码是正确的
      // 现在有用户token
      // actions 修改state 必须通过mutations
      commit('SETTOKEN', result)
      setTimeStamp() // 将当前的最新时间写入缓存

    },
    // 获得用户信息
    async getUserInfo({ commit }) {
      const data = await getInfo()
      // 获得用户头像
      const baseInfo = await getUserDetailById(data.userId)
      const baseRes = { ...data, ...baseInfo }
      commit('SAVEUSERINFO', baseRes)
      return data
    },


    // 退出登录
    logout({ commit }) {
      commit('DELTOKEN')
      // // 删除用户资料
      commit('DELUSERINFO') // 删除用户信息
      resetRouter()

      commit('permission/setRoutes', [], { root: true })
    }
  }
}