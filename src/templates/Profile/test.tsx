import { render, screen } from 'utils/test-util'

import Profile, { ProfileProps } from '.'

jest.mock('components/ProfileViewer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid='Mock Profile Viewer'></div>
    }
  }
})

const props: ProfileProps = {
  bio: 'some bio',
  name: 'John Doe',
  email: 'johndoe@email.com',
  photoUrl: 'image.png'
}

describe('<Profile />', () => {
  it('should render Profile Viewer', () => {
    render(<Profile {...props} />)

    expect(screen.getByTestId('Mock Profile Viewer')).toBeInTheDocument()
  })
})
