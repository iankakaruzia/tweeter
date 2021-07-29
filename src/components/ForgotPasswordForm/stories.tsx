import { Story, Meta } from '@storybook/react/types-6-0'

import ForgotPasswordForm from '.'

export default {
  title: 'Form/ForgotPasswordForm',
  component: ForgotPasswordForm
} as Meta

export const Default: Story = () => (
  <div style={{ width: 300, margin: 'auto' }}>
    <ForgotPasswordForm />
  </div>
)
