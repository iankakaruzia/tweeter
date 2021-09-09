import { renderHook } from '@testing-library/react-hooks'
import { AxiosInstance, AxiosResponse } from 'axios'
import { act } from 'utils/test-util'
import { api } from 'services/api'
import { AuthProvider, useAuth } from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
useRouter.mockImplementation(() => ({
  query: {},
  push: jest.fn()
}))
jest.mock('services/api')

// TODO: Fix unit tests
describe.skip('useAuth', () => {
  const mockedApi = api as jest.Mocked<AxiosInstance>

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('login', () => {
    it('should login the user correctly', async () => {
      const mockedResponse: AxiosResponse = {
        data: {
          email: 'test@test.com',
          username: 'test'
        },
        status: 201,
        statusText: 'OK',
        headers: {},
        config: {}
      }
      mockedApi.post.mockResolvedValueOnce(mockedResponse)
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <AuthProvider authenticated={false}>{children}</AuthProvider>
      )
      const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
        wrapper
      })
      const params = {
        usernameOrEmail: 'test@test.com',
        password: '123456789'
      }

      act(() => {
        result.current.login(params)
      })

      expect(mockedApi.post).toHaveBeenCalledWith(
        'login',
        { ...params },
        { withCredentials: true }
      )

      await waitForNextUpdate()

      expect(result.current.isAuthenticated).toBe(true)
      expect(result.current.user?.email).toBe('test@test.com')
      expect(result.current.user?.username).toBe('test')
    })

    it('should set user as undefined if login throws', async () => {
      mockedApi.post.mockRejectedValueOnce(new Error())
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <AuthProvider authenticated={false}>{children}</AuthProvider>
      )
      const { result } = renderHook(() => useAuth(), {
        wrapper
      })
      const params = {
        usernameOrEmail: 'test@test.com',
        password: '123456789'
      }

      act(() => {
        result.current.login(params)
      })

      expect(mockedApi.post).toHaveBeenCalledWith(
        'login',
        { ...params },
        { withCredentials: true }
      )

      expect(result.current.isAuthenticated).toBe(false)
      expect(result.current.user).toBeUndefined()
    })
  })

  it('should logout the user correctly', async () => {
    const mockedResponse: AxiosResponse = {
      data: {},
      status: 201,
      statusText: 'OK',
      headers: {},
      config: {}
    }
    mockedApi.post.mockResolvedValueOnce(mockedResponse)
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <AuthProvider authenticated={true}>{children}</AuthProvider>
    )
    const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
      wrapper
    })

    act(() => {
      result.current.user = {
        email: 'test@test.com',
        username: 'test'
      }
    })

    expect(result.current.isAuthenticated).toBe(true)
    expect(result.current.user?.email).toBe('test@test.com')
    expect(result.current.user?.username).toBe('test')

    act(() => {
      result.current.logout()
    })

    expect(mockedApi.post).toHaveBeenCalledWith('logout', null, {
      withCredentials: true
    })

    await waitForNextUpdate()

    expect(result.current.isAuthenticated).toBe(false)
    expect(result.current.user).toBeUndefined()
  })

  describe('ssoLogin', () => {
    it('should login with sso correctly', async () => {
      const mockedResponse: AxiosResponse = {
        data: {
          email: 'test@test.com',
          username: 'test'
        },
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {}
      }

      mockedApi.get.mockResolvedValueOnce(mockedResponse)
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <AuthProvider authenticated={true}>{children}</AuthProvider>
      )
      const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
        wrapper
      })

      act(() => {
        result.current.ssoLogin()
      })

      expect(mockedApi.get).toHaveBeenCalledWith('validate', {
        withCredentials: true
      })

      await waitForNextUpdate()

      expect(result.current.isAuthenticated).toBe(true)
      expect(result.current.user?.email).toBe('test@test.com')
      expect(result.current.user?.username).toBe('test')
    })

    it('should set user as undefined if ssoLogin throws', async () => {
      mockedApi.get.mockRejectedValueOnce(new Error())
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <AuthProvider authenticated={false}>{children}</AuthProvider>
      )
      const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
        wrapper
      })

      act(() => {
        result.current.ssoLogin()
      })

      expect(mockedApi.get).toHaveBeenCalledWith('validate', {
        withCredentials: true
      })

      await waitForNextUpdate()

      expect(result.current.isAuthenticated).toBe(false)
      expect(result.current.user).toBeUndefined()
    })
  })
})
