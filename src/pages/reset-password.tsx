import ResetPasswordForm from 'components/ResetPasswordForm'
import Auth from 'templates/Auth'

function ResetPassword() {
  return (
    <Auth title='Reset your Password'>
      <ResetPasswordForm />
    </Auth>
  )
}

export default ResetPassword
