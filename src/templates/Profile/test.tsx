import { render, screen } from 'utils/test-util'

import Profile from '.'

jest.mock('components/ProfileViewer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid='Mock Profile Viewer'></div>
    }
  }
})

describe('<Profile />', () => {
  it('should render Profile Viewer', () => {
    render(<Profile />)

    expect(screen.getByTestId('Mock Profile Viewer')).toBeInTheDocument()
  })
})
