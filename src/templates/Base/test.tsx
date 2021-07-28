import { render, screen } from 'utils/test-util'

import Base from '.'

jest.mock('components/Header', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid='Mock Header'></div>
    }
  }
})

describe('<Base />', () => {
  it('should render menu and children', () => {
    render(
      <Base>
        <h1>Heading</h1>
      </Base>
    )

    expect(screen.getByTestId('Mock Header')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument()
  })
})
