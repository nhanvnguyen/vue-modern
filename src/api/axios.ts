import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { getAccessToken, getRefreshToken, setTokens, clearTokens } from '@/utils/token'
import { refreshToken as refreshTokenApi } from '@/api/auth'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || '/api',
  headers: { 'Content-Type': 'application/json' }
})

let isRefreshing = false

type FailedQueueItem = { resolve: (...args: unknown[]) => void; reject: (...args: unknown[]) => void; config: AxiosRequestConfig }
let failedQueue: FailedQueueItem[] = []

const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach(({ resolve, reject, config }) => {
    if (error) reject(error)
    else {
      if (token && config.headers) config.headers['Authorization'] = `Bearer ${token}`
      resolve(config)
    }
  })
  failedQueue = []
}

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = getAccessToken()
  if (token && config.headers) (config.headers as Record<string, unknown>)['Authorization'] = `Bearer ${token}`
  return config
})

api.interceptors.response.use(
  (res: AxiosResponse) => res,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean }

    if (!originalRequest) return Promise.reject(error)

    if (error.response?.status === 401 && !originalRequest._retry) {
      const refresh = getRefreshToken()
      if (!refresh) {
        clearTokens()
        window.location.href = '/auth/login'
        return Promise.reject(error)
      }

      if (isRefreshing) {
        return new Promise<AxiosRequestConfig>((resolve, reject) => {
          failedQueue.push({
            resolve: (...args: unknown[]) => resolve(args[0] as AxiosRequestConfig),
            reject: (...args: unknown[]) => reject(args[0]),
            config: originalRequest
          })
        })
      }

      originalRequest._retry = true
      isRefreshing = true

      try {
        const data = await refreshTokenApi(refresh)
        const newAccess = data.accessToken
        const newRefresh = data.refreshToken ?? null
        setTokens(newAccess, newRefresh)
        processQueue(null, newAccess)
        return api({ ...originalRequest, headers: { ...(originalRequest.headers ?? {}), Authorization: `Bearer ${newAccess}` } })
      } catch (err: unknown) {
        processQueue(err, null)
        clearTokens()
        window.location.href = '/auth/login'
        return Promise.reject(err)
      } finally {
        isRefreshing = false
      }
    }

    return Promise.reject(error)
  }
)
export default api

