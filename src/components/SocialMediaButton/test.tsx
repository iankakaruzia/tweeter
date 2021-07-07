import { render, screen } from 'utils/test-util'

import SocialMediaButton from '.'

describe('<SocialMediaButton />', () => {
  it('should render a disabled Button', () => {
    render(<SocialMediaButton disabled socialMedia='facebook' />)

    expect(screen.getByLabelText(/login with facebook/i)).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    )
  })

  it('should render Google button', () => {
    render(<SocialMediaButton socialMedia='google' />)

    expect(screen.getByLabelText(/login with google/i)).toBeInTheDocument()
  })

  it('should render Twitter button', () => {
    render(<SocialMediaButton socialMedia='twitter' />)

    expect(screen.getByLabelText(/login with twitter/i)).toBeInTheDocument()
  })

  it('should render Github button', () => {
    render(<SocialMediaButton socialMedia='github' />)

    expect(screen.getByLabelText(/login with github/i)).toBeInTheDocument()
  })
})
