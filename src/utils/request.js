/*
 * @Date: 2022-08-10 23:54:39
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-08-11 00:23:40
 * @FilePath: \zb\src\utils\request.js
 */
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://127.0.0.1:4523/m1/1141994-0-default',
})

//请求拦截
request.interceptors.request.use(function (config) {
  let jwtToken = localStorage.getItem('jwtToken')
  if (jwtToken) {
    config.headers.jwtToken = jwtToken
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

export default request