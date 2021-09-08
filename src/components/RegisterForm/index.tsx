import { useState } from 'react'
import Link from 'next/link'
import {
  Email,
  Https,
  Person,
  ErrorOutline
} from '@styled-icons/material-rounded'

import TextField from 'components/TextField'
import Button from 'components/Button'
import {
  FormError,
  FormLink,
  FormSuccess,
  FormWrapper
} from 'components/AuthForm'
import SocialMediaLogin from 'components/SocialMediaLogin'
import { FieldErrors, registerValidate } from 'utils/validations'
import { api, isServiceError } from 'services/api'

const RegisterForm = () => {
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [formError, setFormError] = useState('')
  const [sucessMessage, setSucessMessage] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setFormError('')

    const errors = registerValidate({
      email,
      username,
      password,
      passwordConfirmation
    })

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})

    try {
      const { data } = await api.post('register', {
        email,
        username,
        password,
        passwordConfirmation
      })
      setSucessMessage(data.message)
    } catch (error) {
      if (isServiceError(error)) {
        if (error.response?.status === 409) {
          setFormError(
            'An user with the same email or password has already been created!'
          )
        }
      } else {
        setFormError('Something went wrong! Please try again later.')
      }
    }
  }

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
      {sucessMessage ? (
        <FormSuccess>
          <span>{sucessMessage}</span>
          <Link href='/login' passHref>
            <Button as='a'>Login</Button>
          </Link>
        </FormSuccess>
      ) : (
        <form onSubmit={handleSubmit}>
          <TextField
            placeholder='Email'
            type='email'
            icon={<Email />}
            error={fieldError?.email}
            name='email'
            value={email}
            onInputChange={(text) => setEmail(text)}
          />
          <TextField
            placeholder='Username'
            icon={<Person />}
            error={fieldError?.username}
            name='username'
            value={username}
            onInputChange={(text) => setUsername(text)}
          />
          <TextField
            placeholder='Password'
            type='password'
            icon={<Https />}
            error={fieldError?.password}
            name='password'
            value={password}
            onInputChange={(text) => setPassword(text)}
          />
          <TextField
            placeholder='Password Confirmation'
            type='password'
            icon={<Https />}
            error={fieldError?.confirmPassword}
            name='passwordConfirmation'
            value={passwordConfirmation}
            onInputChange={(text) => setPasswordConfirmation(text)}
          />

          <Button type='submit'>Start now</Button>

          <SocialMediaLogin />

          <FormLink>
            Already a member?{' '}
            <Link href='/login'>
              <a>Login</a>
            </Link>
          </FormLink>
        </form>
      )}
    </FormWrapper>
  )
}

export default RegisterForm
