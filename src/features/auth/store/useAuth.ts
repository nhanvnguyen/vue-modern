import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { AuthUser } from '../types'
import { login as apiLogin } from '@/api/auth'
import { setTokens, clearTokens, getAccessToken } from '@/utils/token'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<AuthUser | null>(null)
  const token = ref<string | null>(getAccessToken())

  const login = async (payload: { email: string; password: string }) => {
    const res = await apiLogin(payload)
    token.value = res.accessToken
    setTokens(res.accessToken, res.refreshToken ?? null)
    if (res.user) user.value = res.user
    return res
  }

  const logout = () => {
    token.value = null
    user.value = null
    clearTokens()
  }

  const restore = () => {
    const access = getAccessToken()
    token.value = access
  }

  restore()

  return { user, token, login, logout, restore }
})

export default useAuthStore
