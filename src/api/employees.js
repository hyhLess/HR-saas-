import request from "@/utils/request";

/**
 *  获取员工的简单列表
 * **/
export const getEmployeeSimple = () => request({
    url: '/sys/user/simple',
    method: 'get'
})
// 获取员工的综合列表数据
export const getEmployeeList = (params) => request({
    url: '/sys/user',
    params
})