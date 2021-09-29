import styled, { css } from 'styled-components'

export const Container = styled.p`
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
