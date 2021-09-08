import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Https, ErrorOutline } from '@styled-icons/material-rounded'

import {
  FormError,
  FormLink,
  FormSuccess,
  FormWrapper
} from 'components/AuthForm'
import TextField from 'components/TextField'
import Button from 'components/Button'
import { FieldErrors, resetPasswordValidate } from 'utils/validations'
import { api, isServiceError } from 'services/api'

const ResetPasswordForm = () => {
  const { query } = useRouter()
  const token = query.token
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [formError, setFormError] = useState('')
  const [sucessMessage, setSucessMessage] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setFormError('')

    const errors = resetPasswordValidate({
      password,
      passwordConfirmation
    })

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})

    try {
      const { data } = await api.post(`reset-password/${token}`, {
        password,
        passwordConfirmation
      })
      setSucessMessage(data.message)
    } catch (error) {
      if (isServiceError(error)) {
        if (error.response?.status === 404) {
          setFormError(error.response.data.mesage)
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
          <Button type='submit'>Reset Password</Button>
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

export default ResetPasswordForm
