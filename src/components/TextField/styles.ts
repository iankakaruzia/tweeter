import styled, { css, DefaultTheme } from 'styled-components'

import { TextFieldProps } from '.'

type WrapperProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean }

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: transparent;
    border-radius: 0.8rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.1rem solid;
    border-color: ${theme.colors.gray};

    &:focus-within {
      box-shadow: 0 0 0.3rem ${theme.colors.primary};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.xsmall};
    line-height: 2.2rem;
    letter-spacing: -0.035em;
    padding: ${theme.spacings.xxsmall} 0;
    padding-left: ${theme.spacings.xsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small}
        ${theme.colors.lightGray} inset;
      filter: none;
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    line-height: 1.8rem;
    letter-spacing: -0.035em;
    color: ${theme.colors.lightText};
    font-weight: ${theme.font.medium};
    cursor: pointer;
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.darkGray};
    order: 0;

    & > svg {
      width: 100%;
    }
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.xxxsmall};
  `}
`

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.secondary};
    }

    ${Icon},
    ${Label} {
      color: ${theme.colors.secondary};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};

      &::placeholder {
        color: currentColor;
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`
