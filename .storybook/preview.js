import '../.jest/next-image.mock'
import { ThemeProvider } from 'styled-components'
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}
