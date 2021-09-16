import { GetServerSidePropsContext } from 'next'
import ForgotPasswordForm from 'components/ForgotPasswordForm'
import Auth from 'templates/Auth'
import { publicRoutes } from 'utils/routes'

export default function ForgotPassword() {
  return (
    <Auth title='Request a new Password'>
      <ForgotPasswordForm />
    </Auth>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  await publicRoutes(context)

  return {
    props: {}
  }
}
