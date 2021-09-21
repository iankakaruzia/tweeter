import { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { ErrorOutline, Link } from '@styled-icons/material-rounded'
import { AccordionItemHeading } from 'react-accessible-accordion'

import Button from 'components/Button'
import TextField from 'components/TextField'
import Dropzone from 'components/Dropzone'

import { api, isServiceError } from 'services/api'
import * as S from './styles'
import { useFile } from 'hooks/use-file'
import { useAuth } from 'hooks/use-auth'

type UpdateProfilePhotoModalProps = {
  onSuccess: () => void
}

const UpdateProfilePhotoModal = ({
  onSuccess
}: UpdateProfilePhotoModalProps) => {
  const { setUserInfo } = useAuth()
  const [imageUrl, setImageUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const { uploadedFile, deleteFile } = useFile()
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setError('')
    if (!imageUrl && !uploadedFile?.file) {
      setError('Please provide an image URL or a image file')
      return
    }
    setIsLoading(true)
    const data = new FormData()
    if (uploadedFile?.file) {
      data.append('photo', uploadedFile.file, uploadedFile.name)
    } else if (imageUrl) {
      data.append('imageUrl', imageUrl)
    }

    try {
      const response = await api.post('users/profile-photo', data, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      setUserInfo(response.data.user)
      toast.success('Profile photo updated!')
      setIsLoading(false)
      deleteFile()
      onSuccess()
    } catch (error) {
      setIsLoading(false)
      if (isServiceError(error)) {
        if (error.response?.status === 400) {
          setError('Please provide a valid photo or image url')
          return
        }
      }
      setError('Something went wrong! Please try again later.')
    }
  }

  return (
    <S.Container>
      {!!error && (
        <S.ErrorMessage>
          <ErrorOutline /> {error}
        </S.ErrorMessage>
      )}
      <form onSubmit={handleSubmit}>
        <S.StyledAccordion allowZeroExpanded>
          <S.StyledAccordionItem>
            <AccordionItemHeading>
              <S.StyledAccordionItemButton>
                Use Image URL
              </S.StyledAccordionItemButton>
            </AccordionItemHeading>
            <S.StyledAccordionItemPanel>
              <TextField
                icon={<Link />}
                label='Image URL'
                placeholder='Image URL'
                name='imageUrl'
                value={imageUrl}
                onInputChange={(text) => setImageUrl(text)}
              />
            </S.StyledAccordionItemPanel>
          </S.StyledAccordionItem>
          <S.StyledAccordionItem>
            <AccordionItemHeading>
              <S.StyledAccordionItemButton>
                Choose an Image
              </S.StyledAccordionItemButton>
            </AccordionItemHeading>
            <S.StyledAccordionItemPanel>
              <Dropzone />
            </S.StyledAccordionItemPanel>
          </S.StyledAccordionItem>
        </S.StyledAccordion>
        <Button disabled={isLoading} type='submit' isLoading={isLoading}>
          Update
        </Button>
      </form>
    </S.Container>
  )
}

export default UpdateProfilePhotoModal
