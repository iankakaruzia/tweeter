import { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { Https } from '@styled-icons/material-rounded'

import Button from 'components/Button'
import TextField from 'components/TextField'
import ErrorMessage from 'components/ErrorMessage'

import { api, isServiceError } from 'services/api'
import { FieldErrors, updateCurrentPasswordValidate } from 'utils/validations'
import * as S from './styles'

type UpdatePasswordModalProps = {
  onSuccess: () => void
}

const UpdatePasswordModal = ({ onSuccess }: UpdatePasswordModalProps) => {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [currentPassword, setCurrentPassword] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setError('')

    const errors = updateCurrentPasswordValidate({
      currentPassword,
      password,
      passwordConfirmation
    })

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})
    setIsLoading(true)
    try {
      await api.patch(
        'user/password',
        {
          currentPassword,
          password,
          passwordConfirmation
        },
        { withCredentials: true }
      )
      toast.success('Password updated!')
      setIsLoading(false)
      onSuccess()
    } catch (error) {
      setIsLoading(false)
      if (isServiceError(error)) {
        if (error.response?.status === 400) {
          setError('Please check to see if there is any invalid input fields.')
          return
        }
      }
      setError('Something went wrong! Please try again later.')
    }
  }

  return (
    <S.Container>
      {!!error && <ErrorMessage error={error} />}
      <form onSubmit={handleSubmit}>
        <TextField
          error={fieldError?.currentPassword}
          icon={<Https />}
          name='currentPassword'
          label='Current Password'
          value={currentPassword}
          type='password'
          onInputChange={(text) => setCurrentPassword(text)}
        />
        <TextField
          icon={<Https />}
          error={fieldError?.password}
          name='password'
          label='New Password'
          value={password}
          type='password'
          onInputChange={(text) => setPassword(text)}
        />
        <TextField
          icon={<Https />}
          error={fieldError?.passwordConfirmation}
          name='passwordConfirmation'
          label='New Password Confirmation'
          value={passwordConfirmation}
          type='password'
          onInputChange={(text) => setPasswordConfirmation(text)}
        />
        <Button type='submit' disabled={isLoading} isLoading={isLoading}>
          Update
        </Button>
      </form>
    </S.Container>
  )
}

export default UpdatePasswordModal
