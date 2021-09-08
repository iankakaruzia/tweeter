import { useState } from 'react'
import App, { AppContext, AppProps as Props } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import NextProgress from 'nextjs-progressbar'
import { ToastContainer } from 'react-toastify'
import nookies from 'nookies'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'

import 'react-toastify/dist/ReactToastify.css'

import { AuthProvider } from 'hooks/use-auth'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

type AppProps = {
  authenticated: boolean
} & Props

const MyApp = ({ authenticated, pageProps, Component }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>
          <AuthProvider authenticated={authenticated}>
            <Head>
              <title>Tweeter</title>
              <link
                rel='shortcut icon'
                href='/img/favicon.png'
                type='image/x-icon'
              />
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
            <ToastContainer
              position='top-right'
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Component {...pageProps} />
          </AuthProvider>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  let authenticated = false
  const cookies = nookies.get(appContext.ctx)
  const Authentication = cookies.Authentication ?? null

  if (Authentication) {
    authenticated = true
  }

  const appProps = await App.getInitialProps(appContext)
  return { ...appProps, authenticated }
}

export default MyApp
