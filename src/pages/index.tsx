import { GetServerSidePropsContext } from 'next'
import protectedRoutes from 'utils/protected-routes'

export default function Home() {
  return (
    <div>
      <h1>Tweeter</h1>
    </div>
  )
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
