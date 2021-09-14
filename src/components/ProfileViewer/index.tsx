import Link from 'next/link'
import Image from 'next/image'
import { useQuery } from 'react-query'

import Modal from 'components/Modal'
import UpdatePasswordModal from 'components/UpdatePasswordModal'
import useModal from 'hooks/use-modal'
import { meRequest, ProfileInfo } from 'services/user'
import * as S from './styles'

const ProfileViewer = () => {
  const { data } = useQuery<ProfileInfo>('user', () => meRequest())
  const { isVisible, toggleModal } = useModal()

  const onSuccess = () => toggleModal()

  return (
    <>
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
              <Image
                src={data?.profilePhoto ?? '/img/default-avatar.jpg'}
                width='72'
                height='72'
                alt={data?.username}
              />
            </S.ImageWrapper>
          </S.Section>
          <S.Section>
            <S.Label>Name</S.Label>
            <S.Text>{data?.name ?? '-'}</S.Text>
          </S.Section>
          <S.Section>
            <S.Label>Bio</S.Label>
            <S.Text>{data?.bio ?? '-'}</S.Text>
          </S.Section>
          <S.Section>
            <S.Label>Email</S.Label>
            <S.Text>{data?.email ?? '-'}</S.Text>
          </S.Section>
          <S.Section>
            <S.Label>Password</S.Label>
            <S.UpdateButton onClick={toggleModal}>
              Update Password
            </S.UpdateButton>
          </S.Section>
        </S.Content>
      </S.Wrapper>
      <Modal
        headerText='Update Password'
        isVisible={isVisible}
        toggleModal={toggleModal}
      >
        <UpdatePasswordModal onSuccess={onSuccess} />
      </Modal>
    </>
  )
}

export default ProfileViewer
