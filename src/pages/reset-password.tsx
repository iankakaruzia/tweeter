import { GetServerSidePropsContext } from 'next'
import ResetPasswordForm from 'components/ResetPasswordForm'
import Auth from 'templates/Auth'
import { publicRoutes } from 'utils/routes'

export default function ResetPassword() {
  return (
    <Auth title='Reset your Password'>
      <ResetPasswordForm />
    </Auth>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  await publicRoutes(context)

  return {
    props: {}
  }
}
