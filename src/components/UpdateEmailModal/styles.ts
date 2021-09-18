import { Button } from 'components/Button/styles'
import { Wrapper } from 'components/TextField/styles'
import styled, { css } from 'styled-components'

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
