import {
  SocialMediaButtonsContainer,
  SocialMediaLabel
} from 'components/AuthForm'
import SocialMediaButton from 'components/SocialMediaButton'

const SocialMediaLogin = () => {
  return (
    <>
      <SocialMediaLabel>
        or continue with these social profiles
      </SocialMediaLabel>
      <SocialMediaButtonsContainer>
        <SocialMediaButton socialMedia='google' />
        <SocialMediaButton socialMedia='facebook' />
        <SocialMediaButton socialMedia='twitter' />
        <SocialMediaButton socialMedia='github' />
      </SocialMediaButtonsContainer>
    </>
  )
}

export default SocialMediaLogin
