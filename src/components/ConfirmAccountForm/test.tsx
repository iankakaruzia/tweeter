import { render, screen } from 'utils/test-util'

import ConfirmAccountForm from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()
useRouter.mockImplementation(() => ({
  push,
  query: {
    token: 'any_token'
  },
  asPath: '',
  route: '/'
}))
jest.mock('services/api')

describe('<ConfirmAccountForm />', () => {
  it('should render the form', () => {
    render(<ConfirmAccountForm />)

    expect(
      screen.getByRole('button', { name: /Confirm Account/i })
    ).toBeInTheDocument()
  })
})
