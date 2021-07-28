import { screen, render } from 'utils/test-util'

import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    render(
      <Auth title='Title' subtitle='Some subtitle'>
        <input type='text' />
      </Auth>
    )

    expect(
      screen.getByRole('img', { name: 'DevChallenges' })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /^Title$/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /^Some subtitle$/i
      })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should not render subtitle if its not provided', () => {
    render(
      <Auth title='Title'>
        <input type='text' />
      </Auth>
    )

    expect(screen.getAllByRole('heading')).toHaveLength(1)
  })
})
