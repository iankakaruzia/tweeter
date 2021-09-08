import styled, { css } from 'styled-components'
import { transparentize } from 'polished'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('/img/index-bg.jpg');
  background-position: center;
  background-size: cover;
`

export const Content = styled.div`
  height: 100vh;
  background: ${transparentize(0.1, '#0B090C')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;

  @media (min-width: 700px) {
    width: 700px;
    margin-left: auto;
  }
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.btnText};
    margin-top: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const Subtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.btnText};
    text-align: center;
    margin-bottom: ${theme.spacings.medium};
  `}
`

export const ButtonWrapper = styled.div`
  max-width: 40rem;
  width: 100%;
`

export const LoginText = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.btnText};
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: ${theme.font.bold};
    align-self: flex-end;
    margin-top: ${theme.spacings.large};

    > a {
      color: ${theme.colors.primary};
    }

    @media (min-width: 700px) {
      align-self: center;
    }
  `}
`
