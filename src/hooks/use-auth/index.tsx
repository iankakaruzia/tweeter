import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
  useCallback
} from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

import { useMutation } from 'react-query'
import {
  LoginParams,
  loginRequest,
  logoutRequest,
  validateRequest
} from 'services/auth'
import {
  getStorageItem,
  removeStorageItem,
  setStorageItem
} from 'utils/localStorage'
import { AxiosError } from 'axios'

const AUTH_KEY = 'user'

export type User = {
  email: string
  username: string
  name?: string
  profilePhoto?: string
}

export type AuthContextData = {
  user?: User
  isAuthenticated: boolean
  error: string
  isLoading: boolean
  login: (params: LoginParams) => Promise<boolean | undefined>
  ssoLogin: () => Promise<boolean | undefined>
  logout: () => Promise<void>
  setUserInfo: (user: User) => void
  clearError: () => void
}

export const AuthContextDefaultValues: AuthContextData = {
  user: undefined,
  isAuthenticated: false,
  error: '',
  isLoading: false,
  login: () => null as unknown as Promise<undefined>,
  ssoLogin: () => null as unknown as Promise<undefined>,
  logout: () => null as unknown as Promise<void>,
  setUserInfo: () => null as unknown as Promise<void>,
  clearError: () => null as unknown as Promise<void>
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

  useEffect(() => {
    const data = getStorageItem(AUTH_KEY)

    if (data) {
      setUser(data)
    }
  }, [])

  const clearAuthInfo = () => {
    removeStorageItem(AUTH_KEY)
    setUser(undefined)
    setIsAuthenticated(false)
    setIsLoading(false)
  }

  const clearError = useCallback(() => {
    setError('')
  }, [])

  const setUserInfo = (user: User) => {
    setStorageItem(AUTH_KEY, user)
    setUser(user)
    setIsAuthenticated(true)
  }

  const loginQuery = useMutation<{ user: User }, AxiosError, LoginParams>(
    loginRequest,
    {
      onSuccess: (data) => {
        setUserInfo(data.user)
      },
      onError: () => {
        setError(
          'Unable to login, please double check the credentials provided'
        )
      }
    }
  )

  const logoutQuery = useMutation(logoutRequest, {
    onSuccess: () => {
      clearAuthInfo()
    }
  })

  const validateQuery = useMutation<{ user: User }, Error>(validateRequest, {
    onSuccess: (data) => {
      setUserInfo(data.user)
    }
  })

  const login = async ({
    usernameOrEmail,
    password
  }: LoginParams): Promise<boolean | undefined> => {
    setError('')
    try {
      await loginQuery.mutateAsync({ usernameOrEmail, password })
      return push(`${window.location.origin}${query?.callbackUrl || '/home'}`)
    } catch (error) {
      clearAuthInfo()
    }
  }

  const logout = async () => {
    try {
      await logoutQuery.mutateAsync()
      push('/login')
    } catch (error) {
      toast.error('Unable to logout. Please try again later!')
    }
  }

  const ssoLogin = async () => {
    setIsLoading(true)
    try {
      await validateQuery.mutateAsync()
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
        logout,
        setUserInfo,
        clearError
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export { AuthProvider, useAuth }
