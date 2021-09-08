import styled, { css } from 'styled-components'
import { lighten } from 'polished'

import * as TextFieldStyles from 'components/TextField/styles'
import * as ButtonStyles from 'components/Button/styles'

export const FormWrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;

    ${TextFieldStyles.Wrapper} + ${TextFieldStyles.Wrapper} {
      margin-top: 1.4rem;
    }

    ${ButtonStyles.Button} {
      margin-top: 2.2rem;
    }
  }
`

export const SocialMediaLabel = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    line-height: 1.9rem;
    letter-spacing: -0.035em;

    color: ${theme.colors.darkGray};

    align-self: center;

    margin-top: 3rem;
    margin-bottom: 2rem;
  `}
`

export const SocialMediaButtonsContainer = styled.div`
  display: flex;
  max-width: 23rem;
  width: 100%;
  justify-content: space-around;
  align-self: center;
`

export const FormLink = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    line-height: 1.9rem;
    letter-spacing: -0.035em;

    color: ${theme.colors.darkGray};

    align-self: center;

    margin-top: 3rem;

    a {
      color: ${lighten(0.2, theme.colors.primary)};

      &:hover {
        color: ${lighten(0.25, theme.colors.primary)};
      }
    }
  `}
`

export const FormError = styled.div`
  ${({ theme }) => css`
    color: red;
    font-size: ${theme.font.sizes.xxxsmall};
    display: flex;

    svg {
      width: 1.6rem;
      margin-right: 0.4rem;
    }
  `}
`

export const FormSuccess = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    > span {
      color: ${theme.colors.primary};
      font-size: ${theme.font.sizes.xsmall};
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`
