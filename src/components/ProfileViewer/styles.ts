import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  @media (min-width: 850px) {
    max-width: 84.5rem;
    margin: 0 auto;
    margin-top: 2rem;
  }
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: 3.3rem;
    letter-spacing: -0.035em;
    font-weight: ${theme.font.normal};
    margin: 0;

    color: ${theme.colors.text};
  `}
`

export const Subtitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    line-height: 1.9rem;
    letter-spacing: -0.035em;
    font-weight: ${theme.font.normal};
    margin-top: 0.8rem;

    color: ${theme.colors.text};
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    margin-bottom: 2rem;
    justify-content: space-between;
    width: 100%;

    @media (min-width: 850px) {
      border-bottom: 1px solid ${theme.colors.border};
      margin-bottom: 0;
      padding: 2rem 5rem;
    }
  `}
`

export const HeaderContent = styled.div`
  flex-grow: 1;
`

export const HeaderText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.xxxsmall};
    letter-spacing: -0.035em;

    @media (max-width: 850px) {
      max-width: 14rem;
    }
  `}
`

export const Edit = styled.a`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.darkGray};

    text-decoration: none;
    color: ${theme.colors.darkGray};
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.xsmall}
    line-height: 2.2rem;
    letter-spacing: -0.035em;
    padding: 0.8rem 3rem;
    border-radius: 1.2rem;
  `}
`

export const Section = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 2rem;
    border-bottom: 1px solid ${theme.colors.border};

    &:last-child {
      border-bottom: none;
    }

    @media (min-width: 850px) {
      justify-content: flex-start;
      padding: 2rem 5rem;
    }
  `}
`

export const Label = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.xxxsmall};
    letter-spacing: -0.035em;
    text-transform: uppercase;

    @media (min-width: 850px) {
      justify-content: flex-start;
      padding: 2rem 5rem;
      width: 28rem;
    }
  `}
`

export const Text = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.xsmall};
    letter-spacing: -0.035em;
    max-width: 18rem;
    width: 100%;
    text-align: right;

    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (min-width: 850px) {
      text-align: left;
      max-width: 46.5rem;
    }
  `}
`

export const ImageWrapper = styled.div`
  display: flex;

  img {
    width: 7.2rem;
    height: 7.2rem;
    border-radius: 0.8rem;
  }
`

export const UpdateButton = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.xsmall};
    letter-spacing: -0.035em;

    background: transparent;
    border: none;
    cursor: pointer;

    border: 1px solid ${theme.colors.darkGray};
    padding: 0.8rem 2rem;
    border-radius: 1.2rem;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 4rem;

    @media (min-width: 850px) {
      border: 1px solid ${theme.colors.border};
      border-radius: 12px;
    }
  `}
`
