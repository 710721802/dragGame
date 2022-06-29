/*
 * @Date: 2022-06-27 00:35:40
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-06-27 00:35:45
 * @FilePath: \zb\src\http\index.js
 */
// 封装请求参数
import http from './http.js'
 
function request({ method = "get", url, data = {}, params = {} }) {
    return http({
        method,
        url,
        data,
        params,
    })
}
 
export default request