import Image from 'next/image'
import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'

const ProfileEditor = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Header>
          <S.Title>Change Info</S.Title>
          <S.Text>Changes will be reflected to every services</S.Text>
        </S.Header>

        <form>
          <S.Section>
            <S.ImageWrapper>
              <Image
                src='https://github.com/iankakaruzia.png'
                alt='Ianka Karúzia'
                width='72'
                height='72'
              />
            </S.ImageWrapper>
            <S.ChangePhoto>Change Photo</S.ChangePhoto>
          </S.Section>

          <S.Section>
            <TextField
              fullWidth
              label='Name'
              placeholder='Enter your name...'
            />
          </S.Section>

          <S.Section>
            <TextField
              fullWidth
              as='textarea'
              label='Bio'
              placeholder='Enter your bio...'
              rows={3}
            />
          </S.Section>

          <S.Section>
            <TextField
              fullWidth
              label='Phone'
              placeholder='Enter your phone...'
            />
          </S.Section>

          <Button>Save</Button>
        </form>
      </S.Content>
    </S.Wrapper>
  )
}

export default ProfileEditor
