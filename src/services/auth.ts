import { api } from './api'

export type LoginParams = {
  usernameOrEmail: string
  password: string
}

export const loginRequest = async <T>({
  usernameOrEmail,
  password
}: LoginParams) => {
  const { data } = await api.post<T>(
    'login',
    {
      usernameOrEmail,
      password
    },
    { withCredentials: true }
  )
  return data
}

export const validateRequest = async <T>() => {
  const { data } = await api.get<T>('validate', {
    withCredentials: true
  })
  return data
}

export const validateRequestCookie = async (
  authenticationCookie: string
): Promise<boolean> => {
  const { data } = await api.get<{ valid: boolean }>('validate-cookie', {
    headers: {
      Cookie: `Authentication=${authenticationCookie}`
    }
  })
  return data.valid
}

export const logoutRequest = async () => {
  await api.post('logout', {}, { withCredentials: true })
}
