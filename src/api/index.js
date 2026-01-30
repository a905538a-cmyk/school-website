import axios from 'axios'

// API 基礎設定
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

// 請求攔截器
api.interceptors.request.use(
  config => {
    // 加入語言 header
    const locale = localStorage.getItem('locale') || 'zh-TW'
    config.headers['Accept-Language'] = locale
    return config
  },
  error => Promise.reject(error)
)

// 回應攔截器
api.interceptors.response.use(
  response => response.data,
  error => {
    console.error('API Error:', error)
    return Promise.reject(error)
  }
)

// API 方法
export const newsApi = {
  getList: (params) => api.get('/news', { params }),
  getDetail: (id) => api.get(`/news/${id}`),
  getSpotlight: () => api.get('/news/spotlight')
}

export const departmentsApi = {
  getList: () => api.get('/departments'),
  getDetail: (id) => api.get(`/departments/${id}`)
}

export const eventsApi = {
  getUpcoming: () => api.get('/events/upcoming'),
  getList: (params) => api.get('/events', { params })
}

export const contactApi = {
  submit: (data) => api.post('/contact', data)
}

export default api
