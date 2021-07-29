import { Story, Meta } from '@storybook/react/types-6-0'

import ProfileEditor from '.'

export default {
  title: 'ProfileEditor',
  component: ProfileEditor,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = (args) => <ProfileEditor {...args} />
