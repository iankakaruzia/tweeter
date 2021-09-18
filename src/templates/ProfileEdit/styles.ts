import styled, { css } from 'styled-components'

export const Container = styled.div`
  max-width: 84.5rem;
  margin: 0 auto;
`

export const BackButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
    margin: ${theme.spacings.small} 0;

    font-size: ${theme.font.sizes.small};
    line-height: 2.5rem;
    letter-spacing: -0.035em;

    color: ${theme.colors.primary};
  `}
`

export const Footer = styled.div`
  margin-top: 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 850px) {
    padding: 0 2rem;
    padding-bottom: 8rem;
  }
`

export const Text = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.xxsmall};
    line-height: 1.9rem;
    letter-spacing: -0.035em;

    color: ${theme.colors.darkGray};

    span {
      font-weight: ${theme.font.semibold};
      text-decoration: underline;
    }
  `}
`
