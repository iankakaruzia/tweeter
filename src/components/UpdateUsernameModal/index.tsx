import { FormEvent } from 'react'
import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'

const UpdateUsernameModal = () => {
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
  }

  return (
    <S.Container>
      <form onSubmit={handleSubmit}>
        <TextField label='New Username' />
        <Button type='submit'>Update</Button>
      </form>
    </S.Container>
  )
}

export default UpdateUsernameModal
