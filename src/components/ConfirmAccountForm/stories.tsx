import { Story, Meta } from '@storybook/react/types-6-0'

import ConfirmAccountForm from '.'

export default {
  title: 'Form/ConfirmAccountForm',
  component: ConfirmAccountForm
} as Meta

export const Default: Story = () => (
  <div style={{ width: 300, margin: 'auto' }}>
    <ConfirmAccountForm />
  </div>
)
