import { createContext, ReactNode, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

import { api } from 'services/api'

export type User = {
  email: string
  username: string
  name?: string
  profilePhoto?: string
}

export type LoginParams = {
  usernameOrEmail: string
  password: string
}

export type AuthContextData = {
  user?: User
  isAuthenticated: boolean
  error: string
  isLoading: boolean
  login: (params: LoginParams) => Promise<boolean | undefined>
  ssoLogin: () => Promise<boolean | undefined>
  logout: () => Promise<void>
}

export const AuthContextDefaultValues: AuthContextData = {
  user: undefined,
  isAuthenticated: false,
  error: '',
  isLoading: false,
  login: () => null as unknown as Promise<undefined>,
  ssoLogin: () => null as unknown as Promise<undefined>,
  logout: () => null as unknown as Promise<void>
}

export const AuthContext = createContext<AuthContextData>(
  AuthContextDefaultValues
)

export type AuthProviderProps = {
  children: ReactNode
  authenticated: boolean
}

const AuthProvider = ({ children, authenticated }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(authenticated)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState<User>()
  const { push, query } = useRouter()

  const clearAuthInfo = () => {
    setUser(undefined)
    setIsAuthenticated(false)
    setIsLoading(false)
  }

  const login = async ({
    usernameOrEmail,
    password
  }: LoginParams): Promise<boolean | undefined> => {
    setError('')

    try {
      const { data } = await api.post<User>(
        'login',
        {
          usernameOrEmail,
          password
        },
        { withCredentials: true }
      )

      setUser(data)
      setIsAuthenticated(true)
      return push(`${window.location.origin}${query?.callbackUrl || ''}`)
    } catch (error) {
      clearAuthInfo()
    }
  }

  const logout = async () => {
    await api.post('logout', null, { withCredentials: true })

    clearAuthInfo()
    push('/login')
  }

  const ssoLogin = async () => {
    setIsLoading(true)

    try {
      const { data } = await api.get<User>('validate', {
        withCredentials: true
      })

      setUser(data)
      setIsAuthenticated(true)
      setIsLoading(false)
      return push(`${window.location.origin}${query?.callbackUrl || ''}`)
    } catch (error) {
      clearAuthInfo()
      toast.error('Unable to login. Please try again later!')
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        error,
        isLoading,
        ssoLogin,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
