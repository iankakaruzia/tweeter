import { useState } from 'react'
import Link from 'next/link'
import { Email, ErrorOutline } from '@styled-icons/material-rounded'

import {
  FormError,
  FormLink,
  FormSuccess,
  FormWrapper
} from 'components/AuthForm'
import TextField from 'components/TextField'
import Button from 'components/Button'
import { FieldErrors, forgotPasswordValidate } from 'utils/validations'
import { api } from 'services/api'

const ForgotPasswordForm = () => {
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [formError, setFormError] = useState('')
  const [sucessMessage, setSucessMessage] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setFormError('')

    const errors = forgotPasswordValidate({
      email
    })

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})

    try {
      const { data } = await api.post('forgot-password', {
        email
      })

      setSucessMessage(data.message)
    } catch (error) {
      setFormError('Something went wrong! Please try again later.')
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

          <Button type='submit'>Send Email</Button>

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

export default ForgotPasswordForm
