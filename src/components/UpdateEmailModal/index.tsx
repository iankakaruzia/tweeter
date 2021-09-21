import { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { ErrorOutline, Email } from '@styled-icons/material-rounded'

import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'
import { FieldErrors, updateEmailValidate } from 'utils/validations'
import { api, isServiceError } from 'services/api'
import { useAuth } from 'hooks/use-auth'

type UpdateEmailModalProps = {
  onSuccess: () => void
}

const UpdateEmailModal = ({ onSuccess }: UpdateEmailModalProps) => {
  const { setUserInfo } = useAuth()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [email, setEmail] = useState('')

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setError('')

    const errors = updateEmailValidate({
      email
    })

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})
    setIsLoading(true)
    try {
      const { data } = await api.patch(
        'user/email',
        {
          email
        },
        { withCredentials: true }
      )
      setUserInfo(data.user)
      toast.success('Email updated!')
      setIsLoading(false)
      onSuccess()
    } catch (error) {
      setIsLoading(false)
      if (isServiceError(error)) {
        if (error.response?.status === 400) {
          setError('Please check to see if there is any invalid input fields.')
          return
        } else if (error.response?.status === 409) {
          setError('Email taken!')
          return
        }
      }
      setError('Something went wrong! Please try again later.')
    }
  }

  return (
    <S.Container>
      {!!error && (
        <S.ErrorMessage>
          <ErrorOutline /> {error}
        </S.ErrorMessage>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          icon={<Email />}
          type='email'
          placeholder='Email'
          label='New Email'
          error={fieldError?.email}
          name='email'
          value={email}
          onInputChange={(text) => setEmail(text)}
        />
        <Button type='submit' disabled={isLoading} isLoading={isLoading}>
          Update
        </Button>
      </form>
    </S.Container>
  )
}

export default UpdateEmailModal
