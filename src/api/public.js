import axios from 'axios'
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded'
export default {
  fetchGet (url, params = {}) {
    const BasePath = '/api'
    return new Promise((resolve, reject) => {
      axios.get(BasePath + url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchPost (url, params = {}) {
    const BasePath = '/api'
    return new Promise((resolve, reject) => {
      axios.post(BasePath + url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchPut (url, params = {}) {
    const BasePath = '/api'
    return new Promise((resolve, reject) => {
      axios.put(BasePath + url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchDelete (url, params = {}) {
    const BasePath = '/api'
    return new Promise((resolve, reject) => {
      axios.delete(BasePath + url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
