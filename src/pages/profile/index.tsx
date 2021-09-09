import { GetServerSidePropsContext } from 'next'
import { dehydrate, QueryClient } from 'react-query'
import { meRequest } from 'services/user'
import ProfileTemplate from 'templates/Profile'
import protectedRoutes from 'utils/protected-routes'

export default function Profile() {
  return <ProfileTemplate />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const isAuthenticated = await protectedRoutes(context)

  if (!isAuthenticated) {
    return {
      props: {}
    }
  }

  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('user', meRequest)

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
