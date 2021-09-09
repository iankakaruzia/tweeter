import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { lighten } from 'polished'

export const Header = styled.header`
  position: relative;
  padding: 0 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  height: 7rem;

  ${media.greaterThan('medium')`
    padding: 0 5rem;
  `}
`

export const Username = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxsmall};
    line-height: 1.6rem;
    letter-spacing: -0.035em;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.text};
    margin-left: 1.2rem;
    margin-right: 1.2rem;

    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`

export const DropdownButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  ${media.greaterThan('medium')`
    display: flex;
    align-items: center;
  `}

  ${media.lessThan('medium')`
    > svg {
      display: none;
    }
  `}
`

export const Dropdown = styled.div<{ isActive: boolean }>`
  ${({ isActive, theme }) => css`
    background: ${theme.colors.lightBg};
    border-radius: 1.2rem;
    position: absolute;
    top: 7.6rem;
    right: 1.6rem;
    width: 22.2rem;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border: 1px solid ${theme.colors.border};
    opacity: 0;
    visibility: hidden;
    padding: 1.5rem 1.4rem;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;

    display: flex;
    flex-direction: column;

    ${isActive &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    `}
  `}
`

export const ImageWrapper = styled.div`
  img {
    border-radius: 0.8rem;
  }
`

export const DropdownSeparator = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.border};
    transform: rotate(0deg);
    width: 100%;
    margin: 1rem 0;
  `}
`

export const DropdownOption = styled.a`
  ${({ theme }) => css`
    background: transparent;
    cursor: pointer;
    border: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1.2rem 1.4rem;
    border-radius: 0.8rem;

    font-size: ${theme.font.sizes.xxxsmall};
    line-height: 1.6rem;
    letter-spacing: -0.035em;
    font-weight: ${theme.font.medium};
    color: ${theme.colors.lightText};
    text-decoration: none;
    transition: background 0.2s;

    svg {
      margin-right: 1rem;
    }

    & + & {
      margin-top: 1rem;
    }

    &:hover {
      background: ${theme.colors.headerBg};
    }
  `}
`

export const DropdownLogoutOption = styled(DropdownOption)`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
  `}
`

export const TopNavigation = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  ${media.lessThan('medium')`
    display: none;
  `}
`

const topNavigationLinkModifier = {
  isActive: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primary};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 3px;
      background: ${theme.colors.primary};
      width: 8rem;
      border-radius: 0.8rem 0.8rem 0px 0px;
    }

    &:hover {
      color: ${lighten(0.1, theme.colors.primary)};

      &::after {
        background: ${lighten(0.1, theme.colors.primary)};
      }
    }
  `
}

export const TopNavigationLink = styled.a<{ isActive?: boolean }>`
  ${({ theme, isActive }) => css`
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.xxsmall};
    line-height: 2.1rem;
    letter-spacing: -0.035em;
    color: ${theme.colors.darkGray};
    text-decoration: none;
    width: 8rem;
    text-align: center;
    position: relative;

    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & + & {
      margin-left: 4rem;
    }

    &:hover {
      color: ${lighten(0.1, theme.colors.darkGray)};
    }

    ${isActive && topNavigationLinkModifier.isActive(theme)}
  `}
`

export const BottomNavigation = styled.nav`
  ${({ theme }) => css`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    overflow: hidden;

    padding: 0 1.6rem;

    background: ${theme.colors.lightBg};
    height: 6.8rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    ${media.greaterThan('medium')`
      display: none;
    `}
  `}
`

export const BottomNavigationButton = styled.button`
  ${({ theme }) => css`
    background: transparent;
    padding: 1rem 3rem;
    border: none;
    border-radius: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    transition: background 0.2s;

    svg {
      color: ${theme.colors.darkGray};
    }

    &:hover {
      background: ${theme.colors.headerBg};
    }
  `}
`
