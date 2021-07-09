import Link from 'next/link'

import TextField from 'components/TextField'
import Button from 'components/Button'
import { FormLink, FormWrapper } from 'components/AuthForm'
import SocialMediaLogin from 'components/SocialMediaLogin'

const LoginForm = () => {
  return (
    <FormWrapper>
      <form>
        <TextField placeholder='Email' type='email' />
        <TextField placeholder='Password' type='password' />

        <Button>Login</Button>

        <SocialMediaLogin />

        <FormLink>
          Don&apos;t have an account yet?{' '}
          <Link href='/register'>
            <a>Register</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default LoginForm
