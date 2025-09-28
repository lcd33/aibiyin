import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
class HYRequest {
  constructor(baseURL, timeout = 5000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    // 请求拦截器
    this.instance.interceptors.request.use(
      config => {
        return config
      },
      err => {
        return err
      }
    )
    // 响应拦截器
    this.instance.interceptors.response.use(
      res => {
        return res.data
      },
      err => {
        return err
      }
    )
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({
      ...config,
      method: 'GET'
    })
  }

  post(config) {
    return this.request({
      ...config,
      method: 'POST'
    })
  }
}

export default new HYRequest(BASE_URL, TIMEOUT)
