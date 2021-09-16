import { GetServerSidePropsContext } from 'next'
import { protectedRoutes } from 'utils/routes'
import HomeTemplate from 'templates/Home'

export default function Home() {
  return <HomeTemplate />
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
