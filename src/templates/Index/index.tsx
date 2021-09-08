import Link from 'next/link'
import Image from 'next/image'

import Button from 'components/Button'
import * as S from './styles'

const Index = () => {
  return (
    <S.Container>
      <S.Content>
        <Image
          src='/img/devchallenges-light.svg'
          width='130'
          height='18'
          alt='DevChallenges'
        />
        <S.Title>Tweeter</S.Title>
        <S.Subtitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </S.Subtitle>
        <S.ButtonWrapper>
          <Link href='/register' passHref>
            <Button fullWidth as='a'>
              Register Now
            </Button>
          </Link>
        </S.ButtonWrapper>
        <S.LoginText>
          Already have an account?{' '}
          <Link href='/login'>
            <a>Login</a>
          </Link>
        </S.LoginText>
      </S.Content>
    </S.Container>
  )
}

export default Index
