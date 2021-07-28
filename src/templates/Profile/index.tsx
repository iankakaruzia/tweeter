import ProfileViewer from 'components/ProfileViewer'
import Base from 'templates/Base'

import * as S from './styles'

export type ProfileProps = {
  photoUrl: string
  name: string
  bio: string
  email: string
}

const Profile = ({ name, bio, email, photoUrl }: ProfileProps) => {
  return (
    <Base>
      <ProfileViewer {...{ name, bio, email, photoUrl }} />
      <S.Footer>
        <S.Text>
          created by <span>Ianka Karúzia</span>
        </S.Text>
        <S.Text>devchallenges.io</S.Text>
      </S.Footer>
    </Base>
  )
}

export default Profile
