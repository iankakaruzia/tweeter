import { render, screen, fireEvent } from 'utils/test-util'

import ProfileEdit from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const back = jest.fn()

useRouter.mockImplementation(() => ({
  back
}))

jest.mock('components/ProfileEditor', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid='Mock Profile Editor'></div>
    }
  }
})

describe('<ProfileEdit />', () => {
  it('should render Profile Editor', () => {
    render(<ProfileEdit />)

    expect(screen.getByTestId('Mock Profile Editor')).toBeInTheDocument()
  })

  it('should go back on Back button click', () => {
    render(<ProfileEdit />)

    fireEvent.click(screen.getByRole('button', { name: 'Back' }))

    expect(back).toHaveBeenCalled()
  })
})
