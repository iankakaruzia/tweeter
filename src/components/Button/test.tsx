import { render, screen } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  it('should render a button', () => {
    render(<Button />)

    expect(
      screen.getByRole('button', { name: /click me/i })
    ).toBeInTheDocument()
  })
})
