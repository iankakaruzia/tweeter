import ForgotPasswordForm from 'components/ForgotPasswordForm'
import Auth from 'templates/Auth'

function ForgotPassword() {
  return (
    <Auth title='Request a new Password'>
      <ForgotPasswordForm />
    </Auth>
  )
}

export default ForgotPassword
