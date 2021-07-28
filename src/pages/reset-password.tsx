import ResetPasswordForm from 'components/ResetPasswordForm'
import Auth from 'templates/Auth'

export default function ResetPassword() {
  return (
    <Auth title='Reset your Password'>
      <ResetPasswordForm />
    </Auth>
  )
}
