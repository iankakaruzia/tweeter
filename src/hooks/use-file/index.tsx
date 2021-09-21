import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'

export type UploadedFile = {
  name: string
  preview: string
  file: File | null
}

export type FileContextData = {
  uploadedFile: UploadedFile | undefined
  deleteFile: () => void
  handleUpload: (file: File | undefined) => void
}

export const FileContextDefaultValues: FileContextData = {
  uploadedFile: undefined,
  deleteFile: () => null,
  handleUpload: () => null
}

export const FileContext = createContext<FileContextData>(
  FileContextDefaultValues
)

export type FileProviderProps = {
  children: ReactNode
}

const FileProvider = ({ children }: FileProviderProps) => {
  const [uploadedFile, setUploadedFile] = useState<UploadedFile>()

  useEffect(() => {
    return () => {
      if (uploadedFile) {
        URL.revokeObjectURL(uploadedFile?.preview)
      }
    }
  }, [uploadedFile])

  const deleteFile = () => {
    setUploadedFile(undefined)
  }

  const handleUpload = useCallback((file: File | undefined) => {
    if (!file) {
      return
    }
    setUploadedFile({
      name: file.name,
      preview: URL.createObjectURL(file),
      file: file
    })
  }, [])

  return (
    <FileContext.Provider value={{ uploadedFile, deleteFile, handleUpload }}>
      {children}
    </FileContext.Provider>
  )
}

const useFile = () => {
  const context = useContext(FileContext)
  if (!context) {
    throw new Error('useFile must be used within an FileProvider')
  }
  return context
}

export { FileProvider, useFile }
