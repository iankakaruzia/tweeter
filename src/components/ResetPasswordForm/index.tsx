import { FormWrapper } from 'components/AuthForm'
import TextField from 'components/TextField'
import Button from 'components/Button'

const ResetPasswordForm = () => {
  return (
    <FormWrapper>
      <form>
        <TextField placeholder='Password' type='password' />
        <TextField placeholder='Password Confirmation' type='password' />

        <Button>Reset Password</Button>
      </form>
    </FormWrapper>
  )
}

export default ResetPasswordForm
