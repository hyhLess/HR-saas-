import request from '@/utils/request'
// 用户登录
export function login(data) {
    return request({
        url: '/sys/login',
        method: 'post',
        data
    })
}
// 得到用户信息
export function getInfo() {
    return request({
        url: '/sys/profile',
        method: 'post'
    })
}

export function getUserDetailById(id) {
    return request({
        url: `/sys/user/${id}`
    })
}
