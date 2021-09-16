import { GetServerSidePropsContext } from 'next'
import RegisterForm from 'components/RegisterForm'
import Auth from 'templates/Auth'
import { publicRoutes } from 'utils/routes'

export default function Register() {
  return (
    <Auth
      title='Join thousands of learners from around the world'
      subtitle='Master web development by making real-life projects. There are multiple paths for you to choose'
    >
      <RegisterForm />
    </Auth>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  await publicRoutes(context)

  return {
    props: {}
  }
}
