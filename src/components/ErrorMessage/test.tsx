import { render, screen } from 'utils/test-util'

import ErrorMessage from '.'

describe('<ErrorMessage />', () => {
  it('should render an error message', () => {
    render(<ErrorMessage error='Some Error' />)

    expect(screen.getByText(/some error/i)).toBeInTheDocument()
  })
})
