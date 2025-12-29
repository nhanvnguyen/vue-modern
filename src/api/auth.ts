import axios from 'axios'

const authClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || '/api',
  headers: { 'Content-Type': 'application/json' }
})

import type { AuthUser } from '@/features/auth/types'

export interface LoginResponse {
  accessToken: string
  refreshToken?: string | null
  user?: AuthUser
}

export const login = async (payload: { email: string; password: string }) => {
  const res = await authClient.post<LoginResponse>('/auth/login', payload)
  return res.data
}

export const refreshToken = async (refreshTokenValue: string) => {
  const res = await authClient.post<LoginResponse>('/auth/refresh', { refreshToken: refreshTokenValue })
  return res.data
}

export default {
  login,
  refreshToken
}
