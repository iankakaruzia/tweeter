import ForgotPasswordForm from 'components/ForgotPasswordForm'
import Auth from 'templates/Auth'

export default function ForgotPassword() {
  return (
    <Auth title='Request a new Password'>
      <ForgotPasswordForm />
    </Auth>
  )
}
