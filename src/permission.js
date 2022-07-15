import nProgress from "nprogress";
import 'nprogress/nprogress.css'
import router from "./router";
import store from "./store";
router.beforeEach(async (to, from, next) => {
    const whiteList = ['/404', '/login']
    nProgress.start()
    if (store.getters.token) {
        if (to.path === 'login') {
            next('/')
        } else {
            if (!store.getters.userId) {
                // 如果没有id这个值 才会调用 vuex的获取资料的action
                await store.dispatch('user/getUserInfo')
                // 为什么要写await 因为我们想获取完资料再去放行
            }
            next()
        }
        to.path === 'login' ? next('/') : next()
    } else {
        whiteList.indexOf(to.path) > -1 ? next() : next('/login')
    }
    nProgress.done()
})
router.afterEach((to, from, next) => {
    nProgress.done()

})