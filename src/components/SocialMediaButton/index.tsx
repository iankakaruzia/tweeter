import { ButtonHTMLAttributes } from 'react'
import Image from 'next/image'

import * as S from './styles'

export type SocialMediaButtonProps = {
  socialMedia: 'facebook' | 'google' | 'twitter' | 'github'
} & ButtonHTMLAttributes<HTMLButtonElement>

const SocialMediaButton = ({
  socialMedia,
  ...rest
}: SocialMediaButtonProps) => {
  const getSocialMediaIcon = () => {
    switch (socialMedia) {
      case 'facebook':
        return 'Facebook'
      case 'github':
        return 'Github'
      case 'twitter':
        return 'Twitter'
      default:
        return 'Google'
    }
  }

  const socialMediaIcon = getSocialMediaIcon()

  return (
    <S.Button {...rest} aria-label={`Login with ${socialMediaIcon}`}>
      <Image
        src={`/img/${socialMediaIcon}.svg`}
        alt={socialMediaIcon}
        width='43'
        height='43'
      />
    </S.Button>
  )
}

export default SocialMediaButton
