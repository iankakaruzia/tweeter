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

export const meRequest = async () => {
  const { data } = await api.get<ProfileInfo>('users/me', {
    withCredentials: true
  })
  return data
}
