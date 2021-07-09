import styled, { css } from 'styled-components'
import { lighten } from 'polished'

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
