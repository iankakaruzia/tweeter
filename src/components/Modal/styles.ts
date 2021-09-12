import styled, { css } from 'styled-components'
import { transparentize } from 'polished'

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: ${theme.zIndex.modal.container};
    width: inherit;
    outline: 0;
  `}
`

export const Backdrop = styled.div`
  ${({ theme }) => css`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${transparentize(0.4, '#0B090C')};
    z-index: ${theme.zIndex.modal.backdrop};
  `}
`

export const ModalWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightBg};
    position: relative;
    margin: auto;
    border-radius: 0.8rem;
    min-width: 30rem;

    @media (min-width: 500px) {
      min-width: 40rem;
    }

    @media (min-width: 600px) {
      min-width: 50rem;
    }
  `}
`

export const HeaderWrapper = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem;
`

export const Header = styled.h4`
  ${({ theme }) => css`
    align-self: center;
    color: ${theme.colors.primary};
  `}
`

export const CloseButton = styled.button`
  border: none;
  margin-left: 0.5rem;
  background: none;
  cursor: pointer;
`

export const Content = styled.div`
  padding: 1.6rem;
  max-height: 40rem;
  overflow-x: hidden;
  overflow-y: auto;
`
