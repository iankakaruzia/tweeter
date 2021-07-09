import { render, screen } from 'utils/test-util'

import LoginForm from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

describe('<LoginForm />', () => {
  it('should render the form', () => {
    render(<LoginForm />)

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^login$/i })).toBeInTheDocument()
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

  it("should render text to register if don't have an account", () => {
    render(<LoginForm />)

    expect(screen.getByRole('link', { name: /register/i })).toBeInTheDocument()
    expect(screen.getByText(/don't have an account yet\?/i)).toBeInTheDocument()
  })
})
