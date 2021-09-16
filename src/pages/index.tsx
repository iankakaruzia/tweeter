import { GetServerSidePropsContext } from 'next'
import IndexTemplate from 'templates/Index'
import { publicRoutes } from 'utils/routes'

export default function Index() {
  return <IndexTemplate />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  await publicRoutes(context)

  return {
    props: {}
  }
}
