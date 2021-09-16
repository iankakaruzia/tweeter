import { GetServerSidePropsContext } from 'next'
import { dehydrate, QueryClient } from 'react-query'
import { meRequest } from 'services/user'
import ProfileTemplate from 'templates/Profile'
import { protectedRoutes } from 'utils/routes'

export default function Profile() {
  return <ProfileTemplate />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const authenticationCookie = await protectedRoutes(context)

  if (!authenticationCookie) {
    return {
      props: {}
    }
  }

  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('user', () => meRequest(authenticationCookie))

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
