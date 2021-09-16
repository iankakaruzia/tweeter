import { GetServerSidePropsContext } from 'next'
import { dehydrate, QueryClient } from 'react-query'
import { meRequest } from 'services/user'
import ProfileEditTemplate from 'templates/ProfileEdit'
import { protectedRoutes } from 'utils/routes'

export default function ProfileEdit() {
  return <ProfileEditTemplate />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const authenticationCookie = await protectedRoutes(context)

  if (!authenticationCookie) {
    return {
      props: {}
    }
  }

  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(
    'user-edit',
    () => meRequest(authenticationCookie),
    {
      staleTime: Infinity,
      cacheTime: Infinity
    }
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
