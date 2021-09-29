import { FormEvent, useState } from 'react'
import { useQuery } from 'react-query'
import Image from 'next/image'
import { toast } from 'react-toastify'

import Button from 'components/Button'
import TextField from 'components/TextField'
import Modal from 'components/Modal'
import UpdateUsernameModal from 'components/UpdateUsernameModal'
import UpdateEmailModal from 'components/UpdateEmailModal'
import UpdateProfilePhotoModal from 'components/UpdateProfilePhotoModal'
import ErrorMessage from 'components/ErrorMessage'

import useModal from 'hooks/use-modal'
import { meRequest, ProfileInfo } from 'services/user'
import { api } from 'services/api'
import { formatDateToString, formatStringToDate } from 'utils/format/date'
import { formatPhone, parseStringToPhone } from 'utils/format/phone'
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
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState(data?.name ?? '')
  const [bio, setBio] = useState(data?.bio ?? '')
  const [phone, setPhone] = useState(parseStringToPhone(data?.phone) ?? '')
  const [birthday, setBirthday] = useState(formatDateToString(data?.birthday))

  const { isVisible: isVisibleUsername, toggleModal: toggleUsernameModal } =
    useModal()
  const { isVisible: isVisibleEmail, toggleModal: toggleEmailModal } =
    useModal()
  const {
    isVisible: isVisibleProfilePhoto,
    toggleModal: toggleProfilePhotoModal
  } = useModal()

  const onUsernameUpdateSuccess = async () => {
    await refetch()
    toggleUsernameModal()
  }

  const onEmailUpdateSuccess = async () => {
    await refetch()
    toggleEmailModal()
  }

  const onProfilePhotoUpdateSuccess = async () => {
    await refetch()
    toggleProfilePhotoModal()
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setError('')
    setIsLoading(true)
    if (!name && !bio && !birthday && !phone) {
      setError('Please provide at least one of the values')
      setIsLoading(false)
      return
    }
    try {
      await api.patch(
        'users',
        {
          name,
          bio,
          birthday: formatStringToDate(birthday),
          phone: formatPhone(phone)
        },
        { withCredentials: true }
      )
      toast.success('Profile updated!')
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setError('Something went wrong! Please try again later.')
    }
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
                <S.UpdateButton onClick={toggleProfilePhotoModal}>
                  Change Photo
                </S.UpdateButton>
              </S.Section>

              <S.Section>
                <S.UsernameLabel>
                  Email: <strong>{data.email}</strong>
                </S.UsernameLabel>
                <S.UpdateButton onClick={toggleEmailModal}>
                  Update Email
                </S.UpdateButton>
              </S.Section>

              <S.Section>
                <S.UsernameLabel>
                  Username: <strong>{data.username}</strong>
                </S.UsernameLabel>
                <S.UpdateButton onClick={toggleUsernameModal}>
                  Update Username
                </S.UpdateButton>
              </S.Section>

              <form onSubmit={handleSubmit}>
                {!!error && <ErrorMessage error={error} />}
                <S.Section>
                  <TextField
                    fullWidth
                    label='Name'
                    placeholder='Enter your name...'
                    value={name}
                    onInputChange={(text) => setName(text)}
                  />
                </S.Section>

                <S.Section>
                  <TextField
                    fullWidth
                    as='textarea'
                    label='Bio'
                    placeholder='Enter your bio...'
                    rows={3}
                    value={bio}
                    onInputChange={(text) => setBio(text)}
                  />
                </S.Section>

                <S.Section>
                  <TextField
                    fullWidth
                    label='Phone'
                    placeholder='(XX) XXXXX-XXXX'
                    mask='phone'
                    value={phone}
                    onInputChange={(text) => setPhone(text)}
                  />
                </S.Section>

                <S.Section>
                  <TextField
                    fullWidth
                    label='Birthday'
                    placeholder='DD/MM/YYYY'
                    mask='date'
                    value={birthday}
                    onInputChange={(text) => setBirthday(text)}
                  />
                </S.Section>

                <Button
                  type='submit'
                  disabled={isLoading}
                  isLoading={isLoading}
                >
                  Save
                </Button>
              </form>
            </>
          ) : (
            <div>Unable to fetch the data</div>
          )}
        </S.Content>
      </S.Wrapper>
      <Modal
        headerText='Update Username'
        isVisible={isVisibleUsername}
        toggleModal={toggleUsernameModal}
      >
        <UpdateUsernameModal onSuccess={onUsernameUpdateSuccess} />
      </Modal>

      <Modal
        headerText='Update Email'
        isVisible={isVisibleEmail}
        toggleModal={toggleEmailModal}
      >
        <UpdateEmailModal onSuccess={onEmailUpdateSuccess} />
      </Modal>

      <Modal
        headerText='Update Profile Photo'
        isVisible={isVisibleProfilePhoto}
        toggleModal={toggleProfilePhotoModal}
      >
        <UpdateProfilePhotoModal onSuccess={onProfilePhotoUpdateSuccess} />
      </Modal>
    </>
  )
}

export default ProfileEditor
