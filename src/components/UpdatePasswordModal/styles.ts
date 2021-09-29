import styled from 'styled-components'
import { Button } from 'components/Button/styles'
import { Wrapper } from 'components/TextField/styles'

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
