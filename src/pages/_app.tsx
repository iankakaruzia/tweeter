import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import NextProgress from 'nextjs-progressbar'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Tweeter</title>
        <link rel='shortcut icon' href='/img/favicon.png' type='image/x-icon' />
        <link rel='apple-touch-icon' href='/img/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.json' />
        <meta
          name='description'
          content='Tweeter project with Next.JS and typescript'
        />
      </Head>
      <GlobalStyles />
      <NextProgress
        color='#2F80ED'
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
