import { GetServerSidePropsContext } from 'next'
import nookies from 'nookies'
import { validateRequestCookie } from 'services/auth'

const isValidCookie = async (cookie: string) => {
  if (!cookie) {
    return false
  }

  try {
    const isValid = await validateRequestCookie(cookie)
    return isValid
  } catch (error) {
    return false
  }
}

export async function protectedRoutes(context: GetServerSidePropsContext) {
  let authenticationToken: string | undefined = undefined
  const cookies = nookies.get(context)
  const isValid = await isValidCookie(cookies.Authentication)
  if (isValid) {
    authenticationToken = cookies.Authentication
  } else {
    nookies.destroy(context, 'Authentication')
    context.res.setHeader(
      'Location',
      `/login?callbackUrl=${context.resolvedUrl}`
    )
    context.res.statusCode = 302
  }
  return authenticationToken
}

export async function publicRoutes(context: GetServerSidePropsContext) {
  const cookies = nookies.get(context)
  const isValid = await isValidCookie(cookies.Authentication)
  if (isValid) {
    context.res.setHeader('Location', '/home')
    context.res.statusCode = 302
  }
}
