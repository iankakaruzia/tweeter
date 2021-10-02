import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { ErrorOutline } from '@styled-icons/material-rounded'
import { FormError, FormSuccess, FormWrapper } from 'components/AuthForm'
import Button from 'components/Button'
import { api, isServiceError } from 'services/api'

const ConfirmAccountForm = () => {
  const { query } = useRouter()
  const token = query.token
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [sucessMessage, setSucessMessage] = useState('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
    try {
      const { data } = await api.post(`confirm-account/${token}`)
      setSucessMessage(data.message)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      if (isServiceError(error)) {
        if (error.response?.status === 400 || error.response?.status === 404) {
          setError(error.response.data.message)
          return
        }
      }
      setError('Something went wrong! Please try again later.')
    }
  }

  return (
    <FormWrapper>
      {!!error && (
        <FormError>
          <ErrorOutline /> {error}
        </FormError>
      )}
      {sucessMessage ? (
        <FormSuccess>
          <span>{sucessMessage}</span>
          <Link href='/login' passHref>
            <Button as='a'>Login</Button>
          </Link>
        </FormSuccess>
      ) : (
        <form onSubmit={handleSubmit}>
          <Button isLoading={isLoading} disabled={isLoading} type='submit'>
            Confirm Account
          </Button>
        </form>
      )}
    </FormWrapper>
  )
}

export default ConfirmAccountForm
