import Link from 'next/link'
import Image from 'next/image'

import * as S from './styles'

export type ProfileViewerProps = {
  photoUrl: string
  name: string
  bio: string
  email: string
}

const ProfileViewer = ({ photoUrl, name, bio, email }: ProfileViewerProps) => {
  return (
    <S.Wrapper>
      <S.Title>Personal info</S.Title>
      <S.Subtitle>Basic info, like your name and photo</S.Subtitle>
      <S.Content>
        <S.Header>
          <S.HeaderContent>
            <S.Title>Profile</S.Title>
            <S.HeaderText>
              Some info may be visible to other people
            </S.HeaderText>
          </S.HeaderContent>
          <Link href='/profile/edit' passHref>
            <S.Edit>Edit</S.Edit>
          </Link>
        </S.Header>
        <S.Section>
          <S.Label>Photo</S.Label>
          <S.ImageWrapper>
            <Image src={photoUrl} width='72' height='72' alt={name} />
          </S.ImageWrapper>
        </S.Section>
        <S.Section>
          <S.Label>Name</S.Label>
          <S.Text>{name}</S.Text>
        </S.Section>
        <S.Section>
          <S.Label>Bio</S.Label>
          <S.Text>{bio}</S.Text>
        </S.Section>
        <S.Section>
          <S.Label>Email</S.Label>
          <S.Text>{email}</S.Text>
        </S.Section>
        <S.Section>
          <S.Label>Password</S.Label>
          <S.UpdatePassword>Update Password</S.UpdatePassword>
        </S.Section>
      </S.Content>
    </S.Wrapper>
  )
}

export default ProfileViewer
