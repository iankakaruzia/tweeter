import 'server.mock'
import { renderHook } from '@testing-library/react-hooks'
import { QueryClient, QueryClientProvider } from 'react-query'
import { act, waitFor } from 'utils/test-util'
import { AuthProvider, useAuth } from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
useRouter.mockImplementation(() => ({
  query: {},
  push: jest.fn()
}))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
})

const setupWrapper = ({ authenticated = false } = {}) => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      <AuthProvider authenticated={authenticated}>{children}</AuthProvider>
    </QueryClientProvider>
  )
  return { wrapper }
}

describe('useAuth', () => {
  describe('login', () => {
    it('should login the user correctly', async () => {
      const { wrapper } = setupWrapper()
      const { result } = renderHook(() => useAuth(), {
        wrapper
      })
      const params = {
        usernameOrEmail: 'janedoe',
        password: '123456789'
      }

      act(() => {
        result.current.login(params)
      })

      await waitFor(() => {
        expect(result.current.isAuthenticated).toBe(true)
        expect(result.current.user?.email).toBe('janedoe@email.com')
        expect(result.current.user?.username).toBe('janedoe')
      })
    })

    it('should set user as undefined if login throws', async () => {
      const { wrapper } = setupWrapper()
      const { result } = renderHook(() => useAuth(), {
        wrapper
      })
      const params = {
        usernameOrEmail: 'invalid_user',
        password: '123456789'
      }

      act(() => {
        result.current.login(params)
      })

      await waitFor(() => {
        expect(result.current.isAuthenticated).toBe(false)
        expect(result.current.user).toBeUndefined()
      })
    })
  })

  it('should logout the user correctly', async () => {
    const { wrapper } = setupWrapper({ authenticated: true })
    const { result } = renderHook(() => useAuth(), {
      wrapper
    })

    act(() => {
      result.current.user = {
        email: 'janedoe@email.com',
        username: 'janedoe'
      }
    })

    expect(result.current.isAuthenticated).toBe(true)
    expect(result.current.user?.email).toBe('janedoe@email.com')
    expect(result.current.user?.username).toBe('janedoe')

    act(() => {
      result.current.logout()
    })

    await waitFor(() => {
      expect(result.current.isAuthenticated).toBe(false)
      expect(result.current.user).toBeUndefined()
    })
  })

  describe('ssoLogin', () => {
    it('should login with sso correctly', async () => {
      const { wrapper } = setupWrapper()
      const { result } = renderHook(() => useAuth(), {
        wrapper
      })

      act(() => {
        result.current.ssoLogin()
      })

      await waitFor(() => {
        expect(result.current.isAuthenticated).toBe(true)
        expect(result.current.user?.email).toBe('janedoe@email.com')
        expect(result.current.user?.username).toBe('janedoe')
      })
    })
  })
})
