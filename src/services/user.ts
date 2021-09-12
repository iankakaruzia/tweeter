import { api } from './api'

export type ProfileInfo = {
  id: number
  name: string | null
  provider: string | null
  email: string
  username: string
  bio: string | null
  profilePhoto: string | null
  coverPhoto: string | null
  phone: string | null
  birthday: string | null
}

export const meRequest = async (authentication?: string) => {
  const isBrowser = typeof window !== 'undefined'
  const Cookie = `Authentication=${authentication}`
  const { data } = await api.get<ProfileInfo>('users/me', {
    withCredentials: true,
    headers: {
      ...(isBrowser ? {} : { Cookie })
    }
  })
  return data
}
