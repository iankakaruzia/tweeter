import ProfileViewer from 'components/ProfileViewer'
import Base from 'templates/Base'

import * as S from './styles'

const Profile = () => {
  return (
    <Base>
      <ProfileViewer />
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
