import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from '.'

const wrapperModifiers = {
  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      svg {
        pointer-events: none;
      }
      .text {
        display: none;
      }
    `}
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, hideOnMobile }) => css`
    height: 3rem;
    width: 12.6rem;
    color: ${theme.colors.text};

    ${!!hideOnMobile && wrapperModifiers.hideOnMobile}
  `}
`
