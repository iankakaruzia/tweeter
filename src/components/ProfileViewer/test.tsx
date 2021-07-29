import { render, screen } from 'utils/test-util'

import ProfileViewer, { ProfileViewerProps } from '.'

const props: ProfileViewerProps = {
  bio: 'some bio',
  name: 'John Doe',
  email: 'johndoe@email.com',
  photoUrl: 'image.png'
}

describe('<ProfileViewer />', () => {
  it('should render the ProfileViewer', () => {
    render(<ProfileViewer {...props} />)

    expect(screen.getByRole('img', { name: props.name })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Edit/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Update Password/i })
    ).toBeInTheDocument()
    expect(screen.getByText(props.name)).toBeInTheDocument()
    expect(screen.getByText(props.bio)).toBeInTheDocument()
    expect(screen.getByText(props.email)).toBeInTheDocument()
  })
})
