import { render, screen } from 'utils/test-util'

import Button from '.'

describe('<Button />', () => {
  it('should render a fullWidth version', () => {
    render(
      <Button fullWidth color='gray'>
        Click me
      </Button>
    )

    expect(screen.getByRole('button', { name: /click me/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should not render children when button is loading', () => {
    render(<Button isLoading>Click me</Button>)

    expect(screen.queryByText(/click me/i)).not.toBeInTheDocument()
  })

  it('should render a gray Button', () => {
    render(
      <Button color='gray' outlined>
        Click me
      </Button>
    )

    expect(screen.getByRole('button', { name: /click me/i })).toHaveStyle({
      'background-color': 'transparent',
      border: '1px solid #828282',
      color: '#828282'
    })
  })

  it('should render a disabled Button', () => {
    render(
      <Button disabled outlined>
        Click me
      </Button>
    )

    expect(screen.getByRole('button', { name: /click me/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    )
  })

  it('should render button as a link', () => {
    render(
      <Button as='a' href='/link'>
        Click me
      </Button>
    )

    expect(screen.getByRole('link', { name: /click me/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
