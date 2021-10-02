import 'server.mock'
import { render, screen, waitFor, fireEvent } from 'utils/test-util'

import ConfirmAccountForm from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
jest.mock(
  'next/link',
  () =>
    ({ children }: { children: React.ReactNode }) =>
      children
)
const push = jest.fn()
useRouter.mockImplementation(() => ({
  push,
  query: {
    token: 'valid-token'
  },
  asPath: '',
  route: '/'
}))

describe('<ConfirmAccountForm />', () => {
  it('should render the form and successfully submit', async () => {
    render(<ConfirmAccountForm />)

    const submitButton = screen.getByRole('button', {
      name: /Confirm Account/i
    })
    expect(submitButton).toBeInTheDocument()

    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(
        screen.getByText('Account Successfully Activated!')
      ).toBeInTheDocument()
    })
  })

  it('should render Not Found error message', async () => {
    useRouter.mockImplementationOnce(() => ({
      push,
      query: {
        token: 'bad-token'
      },
      asPath: '',
      route: '/'
    }))
    render(<ConfirmAccountForm />)

    const submitButton = screen.getByRole('button', {
      name: /Confirm Account/i
    })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(
        screen.getByText('Invalid confirmation token!')
      ).toBeInTheDocument()
    })
  })

  it('should render Server Error error message', async () => {
    useRouter.mockImplementationOnce(() => ({
      push,
      query: {
        token: 'server-error-token'
      },
      asPath: '',
      route: '/'
    }))
    render(<ConfirmAccountForm />)

    const submitButton = screen.getByRole('button', {
      name: /Confirm Account/i
    })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(
        screen.getByText('Something went wrong! Please try again later.')
      ).toBeInTheDocument()
    })
  })
})
