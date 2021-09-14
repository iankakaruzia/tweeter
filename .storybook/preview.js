import '../.jest/next-image.mock'
import { ThemeProvider } from 'styled-components'
import { RouterContext } from "next/dist/shared/lib/router-context"
import { addDecorator } from '@storybook/react'
import { initializeWorker, mswDecorator } from 'msw-storybook-addon'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AuthContext, AuthContextDefaultValues } from 'hooks/use-auth'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { handlers } from 'utils/mockServer/handlers'

initializeWorker()
addDecorator(mswDecorator)

const client = new QueryClient()

export const decorators = [
  (Story, context) => (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <AuthContext.Provider value={{
          ...AuthContextDefaultValues,
          ...(context?.args?.authContextValue || {}),
          ...context.args
        }}>
          <GlobalStyles />
          <Story />
        </AuthContext.Provider>
      </ThemeProvider>
    </QueryClientProvider>
  )
]

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  msw: [...handlers]
}
