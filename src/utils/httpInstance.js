import axios from 'axios'
import api from '../config/api'
import { message } from 'ant-design-vue'
import i18n from '@/locales'
import { getLanguage } from '@/utils/common'

export const getHttpInstance = httpConfig => {
  const request = axios.create({
    ...httpConfig
  })

  //请求拦截
  request.interceptors.request.use(function (config) {
    let jwtToken = localStorage.getItem('jwtToken')
    if (jwtToken) {
      config.headers.jwtToken = jwtToken
      // config.headers.lang = location.pathname.split('/')[2] || 'zh-cn'
      config.headers.lang = getLanguage()
    }
    return config
  }, function (error) {
    return Promise.reject(error)
  })

  //响应拦截
  let flag = true
  request.interceptors.response.use(function (response) {
    return response
  }, function (error) {
    if (error.response && error.response.status === 401) {
      // let lang = location.pathname.split('/')[2]
      let lang = getLanguage()
      if(localStorage.getItem('jwtToken')){
        if(api.isEdgeOrCloud == '2'){
          location.href = `${location.origin}/leez-cloud/${lang}/dashboard/edge-home`
        }else{
          location.href = `${location.origin}/leez-cloud/${lang}/login`
        }
      }
      localStorage.removeItem('jwtToken')
      localStorage.removeItem('userName')
      localStorage.removeItem('initialLogin')
    } else if (error.response && error.response.status === 403) {
      if (flag) { // 首次拦截403提示弹框
        flag = false
        // let lang = location.pathname.split('/')[2]
        let lang = getLanguage()
        let title = '对不起，您无权限访问此页面。'
        let content = '点击确定按钮后将跳转至首页'
        let okText = '确定'
        if (lang === 'en-us') {
          title = 'Sorry, you don\'t have permission to access this page.'
          content = 'After clicking the confirm button, it will jump to the homepage'
          okText = 'Confirm'
        }
        Modal.warning({
          title,
          content,
          okText,
          icon: createVNode(ExclamationCircleFilled),
          onOk() {
            location.href = location.origin + '/leez-cloud/' + lang + '/dashboard/home'
          }
        })
      }
    } else {
      message.error({
        content: '当前网络不可用',
        duration: 0.5
      })
    }
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
      message.error(i18n.global.t('common.interfaceError'))
      return res
    } else {
      message.error(res.message)
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
      message.error(i18n.global.t('common.interfaceError'))
      return res
    } else {
      message.error(res.message)
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
      message.error(i18n.global.t('common.interfaceError'))
      return res
    } else {
      message.error(res.message)
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
      message.error(i18n.global.t('common.interfaceError'))
      return res
    } else {
      message.error(res.message)
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
      message.error(i18n.global.t('common.interfaceError'))
      return res
    } else {
      message.error(res.message)
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
      message.error(i18n.global.t('common.interfaceError'))
      return res
    } else {
      message.error(res.message)
      return res
    }
  }

  return {
    get,
    post,
    put,
    patch,
    remove,
    methodRemove,
  }
}