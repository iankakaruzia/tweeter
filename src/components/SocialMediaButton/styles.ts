import styled from 'styled-components'

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  background: transparent;
  height: 4.3rem;
  width: 4.3rem;
  border-radius: 50%;
  transition: opacity 0.2s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover:not(:disabled) {
    opacity: 0.8;
  }
`
