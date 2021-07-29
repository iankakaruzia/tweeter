import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  padding: 1.8rem;

  ${media.greaterThan('small')`
    min-height: 100vh ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('small')`
      max-width: 48rem;
      width: 100%;
      border: 1px solid ${theme.colors.gray};
      border-radius: 2.4rem;
      padding: 4.8rem 5.8rem;
    `}
  `}
`

export const Title = styled.h1<{ hasSubtitle: boolean }>`
  ${({ theme, hasSubtitle }) => css`
    font-weight: ${theme.font.semibold};
    font-size: ${theme.font.sizes.small};
    line-height: 2.5rem;
    letter-spacing: -0.035em;

    color: ${theme.colors.text};
    margin-top: 2.8rem;

    margin-bottom: ${hasSubtitle ? '1.5rem' : '2.8rem'};
  `}
`

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    line-height: 2.2rem;
    letter-spacing: -0.035em;
    font-weight: ${theme.font.normal};

    color: ${theme.colors.text};

    margin-bottom: 3.4rem;
  `}
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6rem;

  ${media.greaterThan('small')`
    margin-top: 1.2rem;
    max-width: 48rem;
    width: 100%;
  `}
`

export const Text = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    line-height: 1.9rem;
    letter-spacing: -0.035em;

    color: ${theme.colors.gray};
  `}
`
