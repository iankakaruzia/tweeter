import { render, screen } from 'utils/test-util'

import ProfileViewer from '.'

// TODO: Fix unit tests
describe.skip('<ProfileViewer />', () => {
  it('should render the ProfileViewer', () => {
    render(<ProfileViewer />)

    expect(screen.getByRole('img', { name: 'something' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Edit/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Update Password/i })
    ).toBeInTheDocument()
    expect(screen.getByText('something')).toBeInTheDocument()
    expect(screen.getByText('something')).toBeInTheDocument()
    expect(screen.getByText('something')).toBeInTheDocument()
  })
})
