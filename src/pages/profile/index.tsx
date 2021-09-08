import { GetServerSidePropsContext } from 'next'
import ProfileTemplate from 'templates/Profile'
import protectedRoutes from 'utils/protected-routes'

export default function Profile() {
  const name = 'Ianka Karúzia'
  const email = 'ianka@email.com'
  const bio = 'Some silly bio here!'
  const photoUrl = 'https://github.com/iankakaruzia.png'

  return <ProfileTemplate {...{ name, email, bio, photoUrl }} />
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
