import Image from 'next/image'

import * as S from './styles'

export type AuthProps = {
  title: string
  subtitle?: string
  children: React.ReactNode
}

const Auth = ({ title, subtitle = '', children }: AuthProps) => {
  return (
    <S.Wrapper>
      <S.Content>
        <Image
          src='/img/devchallenges.svg'
          width='130'
          height='18'
          alt='DevChallenges'
        />
        <S.Title hasSubtitle={!!subtitle}>{title}</S.Title>
        {!!subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
        {children}
      </S.Content>
      <S.Footer>
        <S.Text>Ianka Karúzia</S.Text>
        <S.Text>devchallenges.io</S.Text>
      </S.Footer>
    </S.Wrapper>
  )
}

export default Auth
