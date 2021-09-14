import 'server.mock'
import { render, screen, waitFor } from 'utils/test-util'

import ProfileViewer from '.'

describe('<ProfileViewer />', () => {
  it('should render the ProfileViewer', async () => {
    render(<ProfileViewer />)

    await waitFor(() => {
      expect(screen.getByRole('img', { name: 'janedoe' })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /Edit/i })).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: /Update Password/i })
      ).toBeInTheDocument()
      expect(screen.getByText('Name')).toBeInTheDocument()
      expect(screen.getByText('Bio')).toBeInTheDocument()
      expect(screen.getByText('Email')).toBeInTheDocument()
    })
  })
})
