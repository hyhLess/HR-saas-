import request from "@/utils/request";

export const getDepartment = () => request({
    method: 'get',
    url: '/company/department'
})
export const delDepartment = (id) => request({
    url: `/company/department/${id}`,
    method: 'DELETE'
})
export const addDepartment = (data) => request({
    url: '/company/department',
    method: 'post',
    data
})
export const getDepartDetail = (id) => request({
    url: `/company/department/${id}`,
    method: 'get'
})
export const updateDepartment = (data) => request({
    url: `/company/department/${data.id}`,
    method: 'put',
    data
})   