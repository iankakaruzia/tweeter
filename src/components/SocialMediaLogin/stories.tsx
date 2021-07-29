import { Story, Meta } from '@storybook/react/types-6-0'

import SocialMediaLogin from '.'

export default {
  title: 'SocialMediaLogin',
  component: SocialMediaLogin
} as Meta

export const Default: Story = () => (
  <div style={{ width: 300, margin: 'auto' }}>
    <SocialMediaLogin />
  </div>
)
