/*
 * @Date: 2022-06-27 00:37:32
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-06-27 00:37:55
 * @FilePath: \zb\src\views\request\index.js
 */
// 封装页面请求
import request from '@/http/index.js'
 
// 登录 用户管理 权限管理页面的api请求
 
// 登录验证接口
export const addLogin = (data) => request({ url: '/login', method: "post", data, })
 
// 用户管理页面
// 用户数据列表
export const addUserList = (params) => request({ url: '/users', params, })
 
// 添加用户
export const addUser = (data) => request({ url: '/users', method: 'post', data })
 
// 修改用户信息
export const updateUserList = (data) => request({ url: '/users/' + data.id, data, method: 'put' })
 
// 删除用户的操作
export const removeUser = (data) => request({ url: '/users/' + data.id, data, method: 'delete' })
 
// 分配角色名称的操作
export const stateUserName = (data) => request({ url: '/users/' + data.id + '/role', data, method: 'put' })
 
// 改变角色状态的操作
export const userStateChange = (data) => request({ url: '/users/' + data.uId + '/state/' + data.type, data, method: 'put' })
 
// 搜索数据的操作
export const userSearch = (params) => request({ url: '/users', params })
 
// 权限管理页面
// 获取角色列表
export const addRoleList = () => request({ url: '/roles' })
 
// 删除角色的操作
export const removeUserList = (data) => request({ url: '/roles/' + data.id, method: 'delete' })
 
// 添加角色的操作
export const addRole = (data) => request({ url: '/roles', data, method: 'post' })
 
// 编辑角色的操作
export const updateRole = (data) => request({ url: "/roles/" + data.id, data, method: 'put' })
 
// 获取角色权限列表
export const usePowerList = (data) => request({ url: '/rights/' + data })
 
// 删除角色权限操作
export const removeUserPower = (data) => request({ url: '/roles/' + data.roleId + '/rights/' + data.rightId, method: 'delete' })