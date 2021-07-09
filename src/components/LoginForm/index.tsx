import Link from 'next/link'

import TextField from 'components/TextField'
import Button from 'components/Button'
import { FormLink, FormWrapper } from 'components/AuthForm'
import SocialMediaLogin from 'components/SocialMediaLogin'

import * as S from './styles'

const LoginForm = () => {
  return (
    <FormWrapper>
      <form>
        <TextField placeholder='Email' type='email' />
        <TextField placeholder='Password' type='password' />

        <Link href='/forgot-password' passHref>
          <S.ForgotPassword>Forgot your password?</S.ForgotPassword>
        </Link>

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
