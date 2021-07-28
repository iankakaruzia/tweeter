import Header from 'components/Header'

import * as S from './styles'

export type BaseProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => {
  const user = {
    photoUrl: 'https://github.com/iankakaruzia.png',
    name: 'Ianka Karúzia'
  }
  return (
    <S.Wrapper>
      <Header user={user} />
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}

export default Base
