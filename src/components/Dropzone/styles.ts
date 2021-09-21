import styled, { css, DefaultTheme } from 'styled-components'
import { transparentize } from 'polished'

type DropContainerProps = {
  isDragActive?: boolean
  isDragReject?: boolean
}

const containerModifier = {
  dragActive: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.primary};
  `,
  dragRejected: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.secondary};
  `
}

export const Container = styled.div<DropContainerProps>`
  ${({ isDragActive, isDragReject, theme }) => css`
    border: 1px dashed #ddd;
    border-radius: 4px;
    transition: height 0.2s ease;

    ${isDragActive && containerModifier.dragActive(theme)};
    ${isDragReject && containerModifier.dragRejected(theme)};
  `}
`

type UploadMessageProps = {
  type?: 'default' | 'error' | 'success'
}

const uploadMessageModifier = {
  default: (theme: DefaultTheme) => css`
    color: ${theme.colors.text};
  `,
  error: (theme: DefaultTheme) => css`
    color: ${theme.colors.secondary};
  `,
  success: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
  `
}

export const UploadMessage = styled.p<UploadMessageProps>`
  ${({ type = 'default', theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;

    ${!!type && uploadMessageModifier[type](theme)};
  `}
`

export const Preview = styled.div`
  margin-top: 1.6rem;
  position: relative;
  width: 7rem;
  overflow: visible;

  img {
    object-fit: cover;
  }
`

export const RemoveFileButton = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    position: absolute;
    top: -10px;
    right: 0;
    z-index: 20;
    background: ${transparentize(0.1, theme.colors.lightGray)};
    border: 0;
    display: flex;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;

    &:focus {
      outline: 1px dashed;
    }
  `}
`
