import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { Close } from '@styled-icons/material-rounded'
import FocusLock from 'react-focus-lock'

import theme from 'styles/theme'
import * as S from './styles'

export type ModalProps = {
  isVisible: boolean
  toggleModal: () => void
  headerText: string
  children: React.ReactNode
}

const Modal = ({
  isVisible,
  toggleModal,
  headerText,
  children
}: ModalProps) => {
  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key || event.keyCode
      if ((key === 'Escape' || key === 'Esc' || key === 27) && isVisible) {
        toggleModal()
      }
    },
    [isVisible, toggleModal]
  )

  useEffect(() => {
    isVisible
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset')
    document.addEventListener('keydown', onKeyDown, false)

    return () => {
      document.removeEventListener('keydown', onKeyDown, false)
    }
  }, [isVisible, onKeyDown])

  const modal = (
    <>
      <S.Backdrop onClick={toggleModal} />
      <FocusLock>
        <S.Container
          aria-modal
          aria-labelledby={headerText}
          tabIndex={-1}
          role='dialog'
        >
          <S.ModalWrapper>
            <S.HeaderWrapper>
              <S.Header>{headerText}</S.Header>
              <S.CloseButton
                type='button'
                data-dismiss='modal'
                aria-label='Close'
                onClick={toggleModal}
              >
                <Close size={24} color={theme.colors.primary} />
              </S.CloseButton>
            </S.HeaderWrapper>
            <S.Content>{children}</S.Content>
          </S.ModalWrapper>
        </S.Container>
      </FocusLock>
    </>
  )

  return isVisible ? createPortal(modal, document.body) : null
}

export default Modal
