import { render, screen } from 'utils/test-util'

import RegisterForm from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

describe('<RegisterForm />', () => {
  it('should render the form', () => {
    render(<RegisterForm />)

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/^password$/i)).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText(/password confirmation/i)
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /start now/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /login with facebook/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /login with google/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /login with twitter/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /login with github/i })
    ).toBeInTheDocument()
  })

  it('should render text to login if already have an account', () => {
    render(<RegisterForm />)

    expect(screen.getByRole('link', { name: /login/i })).toBeInTheDocument()
    expect(screen.getByText(/already a member\?/i)).toBeInTheDocument()
  })
})
