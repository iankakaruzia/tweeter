import { ErrorOutline } from '@styled-icons/material-rounded'

import * as S from './styles'

export type ErrorMessageProps = {
  error: string
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <S.Container>
      <ErrorOutline aria-hidden='true' /> {error}
    </S.Container>
  )
}

export default ErrorMessage
