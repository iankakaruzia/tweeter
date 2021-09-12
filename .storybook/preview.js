import '../.jest/next-image.mock'
import { ThemeProvider } from 'styled-components'
import { RouterContext } from "next/dist/shared/lib/router-context"
import { addDecorator } from '@storybook/react'
import { initializeWorker, mswDecorator } from 'msw-storybook-addon'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

initializeWorker()
addDecorator(mswDecorator)

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
