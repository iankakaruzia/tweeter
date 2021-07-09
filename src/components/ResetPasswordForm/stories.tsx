import { Story, Meta } from '@storybook/react/types-6-0'

import ResetPasswordForm from '.'

export default {
  title: 'Form/ResetPasswordForm',
  component: ResetPasswordForm
} as Meta

export const Default: Story = () => (
  <div style={{ width: 300, margin: 'auto' }}>
    <ResetPasswordForm />
  </div>
)
