import styled, { css } from 'styled-components'
import { lighten, transparentize } from 'polished'

export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.xxsmall};
    color: ${lighten(0.2, theme.colors.primary)};
    text-align: right;
    margin-top: 1rem;

    &:hover {
      color: ${lighten(0.25, theme.colors.primary)};
    }
  `}
`

export const ErrorWrapper = styled.div`
  ${({ theme }) => css`
    background: ${transparentize(0.7, theme.colors.secondary)};
    border-radius: 1rem;
    padding: ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.small};

    p {
      font-size: ${theme.font.sizes.xxsmall};
    }
  `}
`
