import { render, screen } from 'utils/test-util'

import ResetPasswordForm from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

describe('<ResetPasswordForm />', () => {
  it('should render the form', () => {
    render(<ResetPasswordForm />)

    expect(screen.getByPlaceholderText(/^password$/i)).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText(/^password confirmation$/i)
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Reset Password/i })
    ).toBeInTheDocument()
  })
})
