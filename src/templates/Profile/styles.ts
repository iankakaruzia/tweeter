import styled, { css } from 'styled-components'

export const Footer = styled.div`
  max-width: 84.5rem;
  margin: 0 auto;
  margin-top: 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
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
