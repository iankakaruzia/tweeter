import { GetServerSidePropsContext } from 'next'
import ProfileEditTemplate from 'templates/ProfileEdit'
import protectedRoutes from 'utils/protected-routes'

export default function ProfileEdit() {
  return <ProfileEditTemplate />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const isAuthenticated = await protectedRoutes(context)

  if (!isAuthenticated) {
    return {
      props: {}
    }
  }

  return {
    props: {}
  }
}
