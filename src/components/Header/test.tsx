import { render, screen, fireEvent } from 'utils/test-util'

import Header, { HeaderProps } from '.'

const props: HeaderProps = {
  user: {
    name: 'some name',
    photoUrl: 'image.png'
  }
}

describe('<Header />', () => {
  it('should render header', () => {
    render(<Header {...props} />)

    expect(screen.getByRole('img', { name: /some name/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Explore/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Bookmarks/i })).toBeInTheDocument()
  })

  it('should open the dropdown menu', () => {
    render(<Header {...props} />)

    const dropdownMenu = screen.getByRole('menu', { hidden: true })
    expect(dropdownMenu.getAttribute('aria-hidden')).toBe('true')
    expect(dropdownMenu).toHaveStyle({ opacity: 0 })

    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(dropdownMenu.getAttribute('aria-hidden')).toBe('false')
    expect(dropdownMenu).toHaveStyle({ opacity: 1 })
    expect(
      screen.getByRole('button', { name: /My Profile/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Group Chat/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Logout/i })).toBeInTheDocument()

    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(dropdownMenu.getAttribute('aria-hidden')).toBe('true')
    expect(dropdownMenu).toHaveStyle({ opacity: 0 })
  })
})