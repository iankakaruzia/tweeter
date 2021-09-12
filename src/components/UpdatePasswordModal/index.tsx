import { FormEvent } from 'react'
import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'

const UpdatePasswordModal = () => {
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
  }

  return (
    <S.Container>
      <form onSubmit={handleSubmit}>
        <TextField label='Current Password' type='password' />
        <TextField label='New Password' type='password' />
        <TextField label='New Password Confirmation' type='password' />
        <Button type='submit'>Update</Button>
      </form>
    </S.Container>
  )
}

export default UpdatePasswordModal
