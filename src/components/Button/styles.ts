import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

export type WrapperProps = {
  fullWidth: boolean
  outlined: boolean
  color: 'primary' | 'gray'
}

const wrapperModifiers = {
  fullWidth: () => css`
    width: 100%;
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `,
  primary: (outlined: boolean, theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.btnText};

    &:hover {
      ${!outlined &&
      css`
        background: ${darken(0.1, theme.colors.primary)};
      `}
    }

    ${outlined &&
    css`
      background-color: transparent;
      border: 1px solid ${theme.colors.primary};
      color: ${theme.colors.primary};

      &:hover {
        border-color: ${darken(0.2, theme.colors.primary)};
        color: ${darken(0.2, theme.colors.primary)};
      }
    `}
  `,
  gray: (outlined: boolean, theme: DefaultTheme) => css`
    background-color: ${theme.colors.darkGray};
    color: ${theme.colors.btnText};

    &:hover {
      ${!outlined &&
      css`
        background: ${darken(0.1, theme.colors.darkGray)};
      `}
    }

    ${outlined &&
    css`
      background-color: transparent;
      border: 1px solid ${theme.colors.darkGray};
      color: ${theme.colors.darkGray};

      &:hover {
        border-color: ${darken(0.2, theme.colors.darkGray)};
        color: ${darken(0.2, theme.colors.darkGray)};
      }
    `}
  `
}

export const Button = styled.button<WrapperProps>`
  ${({ theme, outlined, fullWidth, color, disabled }) => css`
    height: 3.8rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};

    display: inline-flex;
    align-items: center;
    justify-content: center;

    border: 0;
    cursor: pointer;
    border-radius: 0.8rem;
    text-decoration: none;

    span {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.xsmall};
      font-weight: ${theme.font.semibold};
      text-align: center;
      line-height: 2.2rem;
      letter-spacing: -0.035em;
    }

    transition: all 0.2s;

    &:focus {
      outline: 1px dashed;
    }

    ${!!fullWidth && wrapperModifiers.fullWidth};
    ${!!color && wrapperModifiers[color](outlined, theme)};
    ${disabled && wrapperModifiers.disabled()};
  `}
`
