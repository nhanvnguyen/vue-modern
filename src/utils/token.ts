const ACCESS_KEY = 'vm_access_token'
const REFRESH_KEY = 'vm_refresh_token'

export const getAccessToken = () => localStorage.getItem(ACCESS_KEY)
export const getRefreshToken = () => localStorage.getItem(REFRESH_KEY)

export const setTokens = (accessToken: string | null, refreshToken: string | null) => {
  if (accessToken) localStorage.setItem(ACCESS_KEY, accessToken)
  else localStorage.removeItem(ACCESS_KEY)

  if (refreshToken) localStorage.setItem(REFRESH_KEY, refreshToken)
  else localStorage.removeItem(REFRESH_KEY)
}

export const clearTokens = () => {
  localStorage.removeItem(ACCESS_KEY)
  localStorage.removeItem(REFRESH_KEY)
}
