import { useRef } from 'react'
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

export type HeaderProps = {
  user: {
    photoUrl: string
    name: string
  }
}

const Header = ({ user }: HeaderProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false)

  const onClick = () => setIsActive(!isActive)

  return (
    <S.Header>
      <Link href='/'>
        <a>
          <Logo hideOnMobile />
        </a>
      </Link>

      <S.TopNavigation>
        <Link href='/' passHref>
          <S.TopNavigationLink isActive>Home</S.TopNavigationLink>
        </Link>
        <Link href='/' passHref>
          <S.TopNavigationLink>Explore</S.TopNavigationLink>
        </Link>
        <Link href='/' passHref>
          <S.TopNavigationLink>Bookmarks</S.TopNavigationLink>
        </Link>
      </S.TopNavigation>

      <S.DropdownButton onClick={onClick}>
        <S.ImageWrapper>
          <Image src={user.photoUrl} alt={user.name} width='32' height='32' />
        </S.ImageWrapper>
        <S.Username>{user.name}</S.Username>
        {isActive ? (
          <ArrowDropUp aria-label='Close Menu' size={25} />
        ) : (
          <ArrowDropDown size={25} aria-label='Open Menu' />
        )}
      </S.DropdownButton>

      <S.Dropdown
        role='menu'
        aria-hidden={!isActive}
        ref={dropdownRef}
        isActive={isActive}
      >
        <S.DropdownOption>
          <AccountCircle size={16} /> My Profile
        </S.DropdownOption>
        <S.DropdownOption>
          <People size={16} /> Group Chat
        </S.DropdownOption>
        <S.DropdownSeparator />
        <S.DropdownLogoutOption>
          <ExitToApp color='#EB5757' size={16} /> Logout
        </S.DropdownLogoutOption>
      </S.Dropdown>

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
