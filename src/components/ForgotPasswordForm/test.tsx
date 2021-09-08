import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-util'

import ForgotPasswordForm from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

describe('<ForgotPasswordForm />', () => {
  it('should render the form', () => {
    render(<ForgotPasswordForm />)

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Send Email/i })
    ).toBeInTheDocument()
  })

  it('should render text to login if already have an account', () => {
    render(<ForgotPasswordForm />)

    expect(screen.getByRole('link', { name: /login/i })).toBeInTheDocument()
    expect(screen.getByText(/already a member\?/i)).toBeInTheDocument()
  })

  it('should show error message when typing invalid email', async () => {
    render(<ForgotPasswordForm />)

    await userEvent.type(screen.getByPlaceholderText(/email/i), 'invalid')

    userEvent.click(screen.getByRole('button', { name: /send email/i }))

    expect(
      await screen.findByText(/"email" must be a valid email/i)
    ).toBeInTheDocument()
  })
})
