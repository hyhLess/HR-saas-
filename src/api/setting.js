import request from "@/utils/request";

// 获取角色列表
export const getRoleList = (params) => request({
    url: "/sys/role",
    method: "get", params
});
// 获取公司信息
export const getCompanyInfo = (companyId) => request({
    url: `/company/${companyId}`,
    method: 'get'
})
// 获取角色详情
export const getRoleDetail = (id) => request({
    url: `/sys/role/${id}`,
    method: 'get'
})
// 修改角色
export const updateRole = (data) => request({
    url: `/sys/role/${data.id}`,
    method: 'put',
    data
})
// 新增角色
export const addRole = (data) => request({
    url: '/sys/role',
    method: 'post',
    data
})
// 删除角色
export const deleteRole = (id) => request({
    url: `/sys/role/${id}`,
    method: 'DELETE'
})