import { Story, Meta } from '@storybook/react/types-6-0'
import { Email } from '@styled-icons/material-rounded'

import TextField, { TextFieldProps } from '.'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: '',
    name: 'email',
    icon: <Email />,
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
    variant: 'primary'
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary']
      }
    }
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

export const Secondary: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

Secondary.args = {
  variant: 'secondary',
  icon: undefined,
  label: 'Email'
}

export const withError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

withError.args = {
  error: 'Ops...something is wrong'
}
