import { render, screen } from 'utils/test-util'

import ProfileEditor from '.'

// TODO: Fix unit tests
describe.skip('<ProfileEditor />', () => {
  it('should render the ProfileEditor', () => {
    render(<ProfileEditor />)

    expect(
      screen.getByRole('img', { name: 'Ianka Karúzia' })
    ).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Enter your name...')
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your bio...')).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Enter your phone...')
    ).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Enter your email...')
    ).toBeInTheDocument()
  })
})
