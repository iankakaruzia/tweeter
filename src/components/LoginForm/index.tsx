import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Email, Https } from '@styled-icons/material-rounded'

import TextField from 'components/TextField'
import Button from 'components/Button'
import { FormLink, FormWrapper } from 'components/AuthForm'
import SocialMediaLogin from 'components/SocialMediaLogin'
import { FieldErrors, loginValidate } from 'utils/validations'

import { useAuth } from 'hooks/use-auth'
import * as S from './styles'

const LoginForm = () => {
  const { login, error, clearError } = useAuth()
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [usernameOrEmail, setUsernameOrEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    clearError()
  }, [clearError])

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const errors = loginValidate({ usernameOrEmail, password })

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})

    await login({
      usernameOrEmail,
      password
    })
  }

  return (
    <FormWrapper>
      {error && (
        <S.ErrorWrapper>
          <p>{error}</p>
        </S.ErrorWrapper>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          placeholder='Username or Email'
          icon={<Email />}
          name='email'
          error={fieldError?.usernameOrEmail}
          value={usernameOrEmail}
          onInputChange={(text) => setUsernameOrEmail(text)}
        />
        <TextField
          placeholder='Password'
          type='password'
          icon={<Https />}
          name='password'
          error={fieldError?.password}
          value={password}
          onInputChange={(text) => setPassword(text)}
        />

        <Link href='/forgot-password' passHref>
          <S.ForgotPassword>Forgot your password?</S.ForgotPassword>
        </Link>

        <Button type='submit'>Login</Button>

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
