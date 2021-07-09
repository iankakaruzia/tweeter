import { Story, Meta } from '@storybook/react/types-6-0'

import LoginForm from '.'

export default {
  title: 'Form/LoginForm',
  component: LoginForm
} as Meta

export const Default: Story = () => (
  <div style={{ width: 300, margin: 'auto' }}>
    <LoginForm />
  </div>
)
