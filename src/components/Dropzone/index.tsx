import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'
import { Close } from '@styled-icons/material-rounded'
import { useFile } from 'hooks/use-file'

import * as S from './styles'

const Dropzone = () => {
  const { handleUpload, uploadedFile, deleteFile } = useFile()
  const onDrop = useCallback(
    (files: File[]) => {
      const file = files.shift()
      handleUpload(file)
    },
    [handleUpload]
  )

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      accept: ['image/jpg', 'image/png'],
      multiple: false,
      onDrop
    })

  const renderDragMessage = useCallback(() => {
    if (isDragReject) {
      return <S.UploadMessage type='error'>File unsupported</S.UploadMessage>
    }

    if (isDragActive) {
      return <S.UploadMessage>Drag the image here...</S.UploadMessage>
    }

    return (
      <S.UploadMessage type='success'>Drop the image here...</S.UploadMessage>
    )
  }, [isDragActive, isDragReject])

  return (
    <>
      <S.Container {...getRootProps()}>
        <input {...getInputProps()} />
        {renderDragMessage()}
      </S.Container>
      {uploadedFile?.preview && (
        <S.Preview>
          <S.RemoveFileButton
            aria-label='remove file'
            type='button'
            onClick={deleteFile}
          >
            <Close size={24} />
          </S.RemoveFileButton>
          <Image
            src={uploadedFile.preview}
            width='60'
            height='60'
            alt={`Preview of file ${uploadedFile.name}`}
          />
        </S.Preview>
      )}
    </>
  )
}

export default Dropzone
