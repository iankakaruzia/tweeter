import { GetServerSidePropsContext } from 'next'
import nookies from 'nookies'

async function protectedRoutes(context: GetServerSidePropsContext) {
  let isAuthenticated = false
  const cookies = nookies.get(context)
  if (cookies.Authentication) {
    isAuthenticated = true
  } else {
    context.res.setHeader(
      'Location',
      `/login?callbackUrl=${context.resolvedUrl}`
    )
    context.res.statusCode = 302
  }
  return isAuthenticated
}

export default protectedRoutes
