import { login as authLogin } from '@/api/auth'

export const login = async (payload: { email: string; password: string }) => {
  return authLogin(payload)
}

export default { login }