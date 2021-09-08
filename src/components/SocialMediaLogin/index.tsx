import {
  SocialMediaButtonsContainer,
  SocialMediaLabel
} from 'components/AuthForm'
import SocialMediaButton from 'components/SocialMediaButton'
import useSSO from 'hooks/use-sso'

const SocialMediaLogin = () => {
  const { redirectToSSO } = useSSO()
  return (
    <>
      <SocialMediaLabel>
        or continue with these social profiles
      </SocialMediaLabel>
      <SocialMediaButtonsContainer>
        <SocialMediaButton
          socialMedia='google'
          onClick={() => redirectToSSO('google')}
        />
        <SocialMediaButton
          socialMedia='facebook'
          onClick={() => redirectToSSO('facebook')}
        />
        <SocialMediaButton
          socialMedia='twitter'
          onClick={() => redirectToSSO('twitter')}
        />
        <SocialMediaButton
          socialMedia='github'
          onClick={() => redirectToSSO('github')}
        />
      </SocialMediaButtonsContainer>
    </>
  )
}

export default SocialMediaLogin
