import { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { ErrorOutline, Person } from '@styled-icons/material-rounded'

import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'
import { FieldErrors, updateUsernameValidate } from 'utils/validations'
import { api, isServiceError } from 'services/api'
import { useAuth } from 'hooks/use-auth'

type UpdateUsernameModalProps = {
  onSuccess: () => void
}

const UpdateUsernameModal = ({ onSuccess }: UpdateUsernameModalProps) => {
  const { setUserInfo } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [username, setUsername] = useState('')

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setError('')

    const errors = updateUsernameValidate({
      username
    })

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})
    setIsLoading(true)
    try {
      const { data } = await api.patch(
        'user/username',
        {
          username
        },
        { withCredentials: true }
      )
      setUserInfo(data.user)
      toast.success('Username updated!')
      setIsLoading(false)
      onSuccess()
    } catch (error) {
      setIsLoading(false)
      if (isServiceError(error)) {
        if (error.response?.status === 400) {
          setError('Please check to see if there is any invalid input fields.')
          return
        } else if (error.response?.status === 409) {
          setError('Username taken!')
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
          icon={<Person />}
          placeholder='Username'
          label='New Username'
          error={fieldError?.username}
          name='username'
          value={username}
          onInputChange={(text) => setUsername(text)}
        />
        <Button type='submit' disabled={isLoading} isLoading={isLoading}>
          Update
        </Button>
      </form>
    </S.Container>
  )
}

export default UpdateUsernameModal
