import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  AccountCircle,
  People,
  ExitToApp,
  ArrowDropDown,
  ArrowDropUp,
  Home,
  Explore,
  Bookmark
} from '@styled-icons/material-rounded'

import Logo from 'components/Logo'
import useDetectOutsideClick from 'hooks/use-detect-outside-click'

import * as S from './styles'
import { useAuth } from 'hooks/use-auth'

const Header = () => {
  const { logout, user } = useAuth()
  const [isActive, setIsActive] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = () => {
    setIsActive(false)
  }
  useDetectOutsideClick(dropdownRef, handleClickOutside)

  const handleButtonClick = () => {
    setIsActive(!isActive)
  }

  return (
    <S.Header>
      <Link href='/home'>
        <a>
          <Logo hideOnMobile />
        </a>
      </Link>

      <S.TopNavigation>
        <Link href='/home' passHref>
          <S.TopNavigationLink isActive>Home</S.TopNavigationLink>
        </Link>
        <Link href='/home' passHref>
          <S.TopNavigationLink>Explore</S.TopNavigationLink>
        </Link>
        <Link href='/home' passHref>
          <S.TopNavigationLink>Bookmarks</S.TopNavigationLink>
        </Link>
      </S.TopNavigation>

      {user ? (
        <div ref={dropdownRef}>
          <S.DropdownButton onClick={handleButtonClick}>
            <S.ImageWrapper>
              <Image
                src={user.profilePhoto ?? '/img/default-avatar.jpg'}
                alt={`Profile of ${user.username}`}
                width='32'
                height='32'
              />
            </S.ImageWrapper>
            <S.Username>{user.username}</S.Username>
            {isActive ? (
              <ArrowDropUp aria-label='Close Menu' size={25} />
            ) : (
              <ArrowDropDown size={25} aria-label='Open Menu' />
            )}
          </S.DropdownButton>
          <S.Dropdown role='menu' aria-hidden={!isActive} isActive={isActive}>
            <Link href='/profile' passHref>
              <S.DropdownOption>
                <AccountCircle size={16} /> My Profile
              </S.DropdownOption>
            </Link>
            <Link href='/home' passHref>
              <S.DropdownOption>
                <People size={16} /> Group Chat
              </S.DropdownOption>
            </Link>
            <S.DropdownSeparator />
            <S.DropdownLogoutOption as='button' onClick={logout}>
              <ExitToApp color='#EB5757' size={16} /> Logout
            </S.DropdownLogoutOption>
          </S.Dropdown>
        </div>
      ) : (
        <div />
      )}

      <S.BottomNavigation>
        <S.BottomNavigationButton>
          <Home size={20} />
        </S.BottomNavigationButton>
        <S.BottomNavigationButton>
          <Explore size={20} />
        </S.BottomNavigationButton>
        <S.BottomNavigationButton>
          <Bookmark size={20} />
        </S.BottomNavigationButton>
      </S.BottomNavigation>
    </S.Header>
  )
}

export default Header
