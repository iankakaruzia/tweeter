import { useEffect } from 'react'
import Image from 'next/image'

import * as S from './styles'

export type SSOTemplateProps = {
  message: string
}

const SSOTemplate = ({ message }: SSOTemplateProps) => {
  useEffect(() => {
    setTimeout(() => {
      window.close()
    }, 1000)
  }, [])

  return (
    <S.Container>
      <Image src='/img/tweeter.svg' height='30' width='126' alt='Tweeter' />
      <h1>{message}</h1>
    </S.Container>
  )
}

export default SSOTemplate
