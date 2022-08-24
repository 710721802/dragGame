/*
 * @Date: 2022-08-10 23:54:39
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-08-24 20:46:20
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

/**
  * get请求
  * @param {string} url 请求地址
  * @param {object} data 请求参数
  * @param {object} config 请求配置，包含headers等
  * @param {boolean} automaticJudgment 是否自行判断返回值并处理
  * @return {object} 接口返回信息
  */

 const get = async (url, data, config = {}, automaticJudgment = true) => {
  const {
    data: res
  } = await request({
    ...config,
    method: 'get',
    url,
    params: data
  })

  if (!automaticJudgment) {
    return res
  }

  if (res && res.status === 0) {
    if (res.result) {
      return res.result
    }
    return res
  } else {
    return res
  }
}
/**
  * post请求
  * @param {string} url 请求地址
  * @param {object} data 请求参数
  * @param {object} config 请求配置，包含headers等
  * @param {boolean} automaticJudgment 是否自行判断返回值并处理
  * @return {object} 接口返回信息
  */
 const post = async (url, data, config = {}, automaticJudgment = true) => {
  const {
    data: res
  } = await request({
    ...config,
    url,
    method: 'post',
    data
  })

  if (!automaticJudgment) {
    return res
  }

  if (res && res.status === 0) {
    if (res.result) {
      return res.result
    }
    return res
  } else {
    return res
  }
}

/**
* put请求
* @param {string} url 请求地址
* @param {object} data 请求参数
* @param {object} config 请求配置，包含headers等
* @param {boolean} automaticJudgment 是否自行判断返回值并处理
* @return {object} 接口返回信息
*/
const put = async (url, data, config = {}, automaticJudgment = true) => {
  const {
    data: res
  } = await request.put(url, data, config)

  if (!automaticJudgment) {
    return res
  }

  if (res && res.status === 0) {
    if (res.result) {
      return res.result
    }
    return res
  } else {
    return res
  }
}

/**
* patch请求
* @param {string} url 请求地址
* @param {object} data 请求参数
* @param {object} config 请求配置，包含headers等
* @param {boolean} automaticJudgment 是否自行判断返回值并处理
* @return {object} 接口返回信息
*/
const patch = async (url, data, config = {}, automaticJudgment = true) => {
  const {
    data: res
  } = await request.patch(url, data, config)

  if (!automaticJudgment) {
    return res
  }

  if (res && res.status === 0) {
    if (res.result) {
      return res.result
    }
    return res
  } else {
    return res
  }
}

/**
* remove请求
* @param {string} url 请求地址
* @param {object} data 请求参数
* @param {object} config 请求配置，包含headers等
* @param {boolean} automaticJudgment 是否自行判断返回值并处理
* @return {object} 接口返回信息
*/
const remove = async (url, data, config = {}, automaticJudgment = true) => {
  const {
    data: res
  } = await request.delete(url, {
    ...config,
    params: data
  })

  if (!automaticJudgment) {
    return res
  }

  if (res && res.status === 0) {
    if (res.result) {
      return res.result
    }
    return res
  } else {
    return res
  }
}

/**
* remove请求
* @param {string} url 请求地址
* @param {object} data 请求参数
* @param {object} config 请求配置，包含headers等
* @param {boolean} automaticJudgment 是否自行判断返回值并处理
* @return {object} 接口返回信息
*/
 const methodRemove = async (url, data, config = {}, automaticJudgment = true) => {
  const {
    data: res
  } = await request.delete(url, {
    ...config,
    data
  })

  if (!automaticJudgment) {
    return res
  }

  if (res && res.status === 0) {
    if (res.result) {
      return res.result
    }
    return res
  } else {
    return res
  }
}

export default {
  get,
  post,
  put,
  patch,
  remove,
  methodRemove,
}