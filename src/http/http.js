/*
 * @Date: 2022-06-27 00:35:16
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-06-27 00:35:26
 * @FilePath: \zb\src\http\http.js
 */
// 封装请求
import axios from 'axios'
import { ElMessage } from 'element-plus'
// 请求
const http = axios.create({
    baseURL: "https://www.liulongbin.top:8888/api/private/v1",
    timeout: 6000
})
// 请求拦截
http.interceptors.request.use(config => {
    //请求头设置
    let token = localStorage.getItem('token') || ''
    config.headers.Authorization = token
    return config
}, err => {
    console.log(err);
})
// 响应拦截
http.interceptors.response.use(arr => {
    // 对响应码的处理
    switch (arr.data.meta.status) {
        case 200:
            ElMessage({
                message: arr.data.meta.msg,
                type: 'success',
            })
            break;
        case 201:
            ElMessage({
                message: arr.data.meta.msg,
                type: 'success',
            })
            break;
        case 204:
            ElMessage({
                message: arr.data.meta.msg,
                type: 'success',
            })
            break;
        case 400:
            ElMessage({
                message: arr.data.meta.msg,
                type: 'warning',
            })
            break;
        case 401:
            ElMessage({
                message: arr.data.meta.msg,
                type: 'warning',
            })
            break;
        case 403:
            ElMessage({
                message: arr.data.meta.msg,
                type: 'warning',
            })
            break;
        case 404:
            ElMessage({
                message: arr.data.meta.msg,
                type: 'warning',
            })
            break;
        case 422:
            ElMessage({
                message: arr.data.meta.msg,
                type: 'warning',
            })
            break;
        case 500:
            ElMessage({
                message: arr.data.meta.msg,
                type: 'error',
            })
            break;
    }
    return arr.data.data
}, err => {
    console.log(err);
})
// 返出
export default http