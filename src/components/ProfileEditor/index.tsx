import { useQuery } from 'react-query'
import Image from 'next/image'
import Button from 'components/Button'
import TextField from 'components/TextField'
import Modal from 'components/Modal'
import UpdateUsernameModal from 'components/UpdateUsernameModal'

import useModal from 'hooks/use-modal'
import { meRequest, ProfileInfo } from 'services/user'
import * as S from './styles'

const ProfileEditor = () => {
  const { data, refetch } = useQuery<ProfileInfo>(
    'user-edit',
    () => meRequest(),
    {
      staleTime: Infinity,
      cacheTime: Infinity
    }
  )
  const { isVisible, toggleModal } = useModal()

  const onSuccess = async () => {
    await refetch()
    toggleModal()
  }

  return (
    <>
      <S.Wrapper>
        <S.Content>
          <S.Header>
            <S.Title>Change Info</S.Title>
            <S.Text>Changes will be reflected to every services</S.Text>
          </S.Header>

          {data ? (
            <>
              <S.Section>
                <S.ImageWrapper>
                  <Image
                    src={data.profilePhoto ?? '/img/default-avatar.jpg'}
                    alt={data.name || data.username}
                    width='72'
                    height='72'
                  />
                </S.ImageWrapper>
                <S.UpdateButton>Change Photo</S.UpdateButton>
              </S.Section>

              <S.Section>
                <S.UsernameLabel>
                  Username: <strong>{data.username}</strong>
                </S.UsernameLabel>
                <S.UpdateButton onClick={toggleModal}>
                  Update Username
                </S.UpdateButton>
              </S.Section>

              <form>
                <S.Section>
                  <TextField
                    fullWidth
                    label='Name'
                    placeholder='Enter your name...'
                    initialValue={data.name ?? ''}
                  />
                </S.Section>

                <S.Section>
                  <TextField
                    fullWidth
                    as='textarea'
                    label='Bio'
                    placeholder='Enter your bio...'
                    rows={3}
                    initialValue={data.bio ?? ''}
                  />
                </S.Section>

                <S.Section>
                  <TextField
                    fullWidth
                    label='Phone'
                    placeholder='(XX) X XXXX-XXXX'
                    initialValue={data.phone ?? ''}
                  />
                </S.Section>

                <S.Section>
                  <TextField
                    fullWidth
                    label='Birthday'
                    placeholder='DD/MM/YYYY'
                    initialValue={data.birthday ?? ''}
                  />
                </S.Section>

                <Button>Save</Button>
              </form>
            </>
          ) : (
            <div>Unable to fetch the data</div>
          )}
        </S.Content>
      </S.Wrapper>
      <Modal
        headerText='Update Username'
        isVisible={isVisible}
        toggleModal={toggleModal}
      >
        <UpdateUsernameModal onSuccess={onSuccess} />
      </Modal>
    </>
  )
}

export default ProfileEditor
