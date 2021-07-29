import { Button } from 'components/Button/styles'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  padding: 0 2rem;

  @media (min-width: 850px) {
    max-width: 84.5rem;
    margin: 0 auto;
    padding: 0;
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    ${Button} {
      margin: ${theme.spacings.xsmall} 0;
    }

    @media (min-width: 850px) {
      border: 1px solid ${theme.colors.border};
      border-radius: 12px;
      padding: ${theme.spacings.small} ${theme.spacings.large};
    }
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};
    margin-top: ${theme.spacings.xsmall};

    @media (min-width: 850px) {
      margin-top: 0;
    }
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: 3.3rem;
    letter-spacing: -0.035em;
    font-weight: ${theme.font.normal};
    margin: 0;

    color: ${theme.colors.text};
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.xxxsmall};
    letter-spacing: -0.035em;
  `}
`

export const Section = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxsmall};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    @media (min-width: 850px) {
      margin-bottom: ${theme.spacings.small};
      max-width: 42rem;
    }
  `}
`

export const ImageWrapper = styled.div`
  display: flex;

  img {
    width: 7.2rem;
    height: 7.2rem;
    border-radius: 0.8rem;
  }
`

export const ChangePhoto = styled.button`
  ${({ theme }) => css`
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.xxsmall};
    line-height: 1.8rem;
    letter-spacing: -0.035em;
    text-transform: uppercase;
    margin-left: ${theme.spacings.medium};
    cursor: pointer;

    background: transparent;
    border: none;
    color: ${theme.colors.darkGray};
  `}
`
