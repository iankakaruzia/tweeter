import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    flex-direction: column;

    background-color: ${theme.colors.mainBg};

    h1 {
      color: ${theme.colors.text};
      margin-top: ${theme.spacings.large};
    }
  `}
`
