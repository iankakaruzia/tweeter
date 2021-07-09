import Link from 'next/link'

import { FormLink, FormWrapper } from 'components/AuthForm'
import TextField from 'components/TextField'
import Button from 'components/Button'

const ForgotPasswordForm = () => {
  return (
    <FormWrapper>
      <form>
        <TextField placeholder='Email' type='email' />

        <Button>Send Email</Button>

        <FormLink>
          Already a member?{' '}
          <Link href='/login'>
            <a>Login</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default ForgotPasswordForm
