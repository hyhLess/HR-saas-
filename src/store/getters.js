const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  name: state => state.user.userInfo.username,
  userId: state => state.user.userInfo.userId,
  staffPhoto: state => state.user.userInfo.staffPhoto, // 建立用户id的映射
  companyId: state => state.user.userInfo.companyId, // 建立对于user模块的companyId的快捷访问
  routes: state => state.permission.routes // 导出当前的路由
}
export default getters
