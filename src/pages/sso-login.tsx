import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import SSOTemplate from 'templates/SSO'
import { publicRoutes } from 'utils/routes'

export default function SSOLogin() {
  let message = 'Thanks for logging in!'
  const { query } = useRouter()
  const status = query.status

  if (status === 'failure') {
    message = 'Unable to login. Please try again later!'
  }

  return <SSOTemplate message={message} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  await publicRoutes(context)

  return {
    props: {}
  }
}
