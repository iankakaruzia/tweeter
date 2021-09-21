import styled, { css, keyframes } from 'styled-components'
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion'
import { transparentize } from 'polished'
import { Button } from 'components/Button/styles'
import { Wrapper } from 'components/TextField/styles'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
`

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }

  ${Wrapper} {
    margin-bottom: 1rem;
  }

  ${Button} {
    margin-top: 1rem;
  }
`

export const ErrorMessage = styled.p`
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

export const StyledAccordion = styled(Accordion)`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.border};
    border-radius: 0.4rem;
  `}

  [hidden] {
    display: none;
  }
`

export const StyledAccordionItem = styled(AccordionItem)`
  ${({ theme }) => css`
    & + & {
      border-top: 1px solid ${theme.colors.border};
    }
  `}
`

export const StyledAccordionItemButton = styled(AccordionItemButton)`
  ${({ theme }) => css`
    background-color: ${transparentize(0.5, theme.colors.lightGray)};
    color: ${theme.colors.text};
    cursor: pointer;
    padding: ${theme.spacings.xsmall};
    width: 100%;
    text-align: left;
    border: none;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${transparentize(0.5, theme.colors.lightGray)};
    }

    &:before {
      display: inline-block;
      content: '';
      height: 1rem;
      width: 1rem;
      margin-right: ${theme.spacings.xsmall};
      border-bottom: 2px solid currentColor;
      border-right: 2px solid currentColor;
      transform: rotate(-45deg);
    }

    &[aria-expanded='true']::before,
    &[aria-selected='true']::before {
      transform: rotate(45deg);
    }
  `}
`

export const StyledAccordionItemPanel = styled(AccordionItemPanel)`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    animation: ${fadeIn} 0.2s ease-in;
  `}
`
