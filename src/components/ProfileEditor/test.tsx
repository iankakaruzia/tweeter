import 'server.mock'
import { render, screen, waitFor } from 'utils/test-util'

import ProfileEditor from '.'

describe('<ProfileEditor />', () => {
  it('should render the ProfileEditor', async () => {
    render(<ProfileEditor />)

    await waitFor(() => {
      expect(screen.getByRole('img', { name: 'janedoe' })).toBeInTheDocument()
      expect(
        screen.getByPlaceholderText('Enter your name...')
      ).toBeInTheDocument()
      expect(
        screen.getByPlaceholderText('Enter your bio...')
      ).toBeInTheDocument()
      expect(
        screen.getByPlaceholderText('(XX) X XXXX-XXXX')
      ).toBeInTheDocument()
      expect(screen.getByPlaceholderText('DD/MM/YYYY')).toBeInTheDocument()
    })
  })
})
