import Link from 'next/link'

import TextField from 'components/TextField'
import Button from 'components/Button'
import { FormLink, FormWrapper } from 'components/AuthForm'
import SocialMediaLogin from 'components/SocialMediaLogin'

const RegisterForm = () => {
  return (
    <FormWrapper>
      <form>
        <TextField placeholder='Email' type='email' />
        <TextField placeholder='Username' />
        <TextField placeholder='Password' type='password' />
        <TextField placeholder='Password Confirmation' type='password' />

        <Button>Start now</Button>

        <SocialMediaLogin />

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

export default RegisterForm
