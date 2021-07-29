import userEvent from '@testing-library/user-event'
import { Email } from '@styled-icons/material-rounded'
import { screen, waitFor, render } from 'utils/test-util'

import theme from 'styles/theme'
import TextField from '.'

describe('<TextField />', () => {
  it('should render a TextField with Label', () => {
    render(<TextField label='Label' name='Label' />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('should render a secondary TextField', () => {
    render(<TextField placeholder='Input' variant='secondary' />)

    expect(screen.getByPlaceholderText('Input')).toHaveStyle({
      'font-size': theme.font.sizes.xxsmall
    })
  })

  it('should render a fullWidth TextField', () => {
    render(<TextField fullWidth placeholder='Input' variant='secondary' />)

    expect(
      screen.getByPlaceholderText('Input').parentElement?.parentElement
    ).toHaveStyle({
      width: '100%'
    })
  })

  it('should render TextField as a textarea', () => {
    render(
      <TextField
        label='Label'
        name='Label'
        as='textarea'
        variant='secondary'
        rows={4}
      />
    )

    expect(screen.getByRole('textbox', { name: 'Label' })).toHaveAttribute(
      'rows',
      '4'
    )
  })

  it('should render a TextField without Label', () => {
    render(<TextField />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('should render a TextField with placeholder', () => {
    render(<TextField placeholder='hey you' />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('should render a TextField with Icon', () => {
    render(<TextField icon={<Email data-testid='icon' />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should Change input value when typing', async () => {
    const onInputChange = jest.fn()
    render(
      <TextField
        onInputChange={onInputChange}
        label='TextField'
        name='TextField'
      />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInputChange).toHaveBeenCalledTimes(text.length)
    })
    expect(onInputChange).toHaveBeenCalledWith(text)
  })

  it('should not change input value when disabled', async () => {
    const onInputChange = jest.fn()
    render(
      <TextField
        onInputChange={onInputChange}
        label='TextField'
        name='TextField'
        disabled
      />
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onInputChange).not.toHaveBeenCalled()
  })

  it('should render TextInput with error', () => {
    render(
      <TextField
        icon={<Email data-testid='icon' />}
        label='TextField'
        error='Error message'
      />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()
  })

  it('should be accessible by tab', () => {
    render(<TextField label='TextField' name='TextField' />)

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('should not be accessible by tab when disabled', () => {
    render(<TextField label='TextField' name='TextField' disabled />)

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).not.toHaveFocus()
  })
})
