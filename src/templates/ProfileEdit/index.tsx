import { ChevronLeft } from '@styled-icons/material-rounded'
import { useRouter } from 'next/router'

import ProfileEditor from 'components/ProfileEditor'
import Base from 'templates/Base'

import * as S from './styles'

const ProfileEdit = () => {
  const router = useRouter()

  const goBack = () => router.back()

  return (
    <Base>
      <S.Container>
        <S.BackButton onClick={goBack}>
          <ChevronLeft size={30} />
          Back
        </S.BackButton>
      </S.Container>
      <ProfileEditor />
      <S.Container>
        <S.Footer>
          <S.Text>
            created by <span>Ianka Karúzia</span>
          </S.Text>
          <S.Text>devchallenges.io</S.Text>
        </S.Footer>
      </S.Container>
    </Base>
  )
}

export default ProfileEdit
