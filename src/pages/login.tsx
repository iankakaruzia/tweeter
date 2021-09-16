import LoginForm from 'components/LoginForm'
import { GetServerSidePropsContext } from 'next'
import Auth from 'templates/Auth'
import { publicRoutes } from 'utils/routes'

export default function Login() {
  return (
    <Auth title='Login'>
      <LoginForm />
    </Auth>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  await publicRoutes(context)

  return {
    props: {}
  }
}
