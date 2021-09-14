import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'

import theme from 'styles/theme'
import {
  AuthContext,
  AuthContextData,
  AuthContextDefaultValues
} from 'hooks/use-auth'

type CustomRenderProps = {
  authProviderProps?: AuthContextData
} & Omit<RenderOptions, 'queries'>

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
})

const customRender = (
  ui: ReactElement,
  {
    authProviderProps = AuthContextDefaultValues,
    ...renderOptions
  }: CustomRenderProps = {}
) =>
  render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AuthContext.Provider value={authProviderProps}>
          {ui}
        </AuthContext.Provider>
      </ThemeProvider>
    </QueryClientProvider>,
    renderOptions
  )

export * from '@testing-library/react'
export { customRender as render }
