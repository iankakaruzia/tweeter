import { Story, Meta } from '@storybook/react/types-6-0'

import ProfileViewer from '.'

export default {
  title: 'ProfileViewer',
  component: ProfileViewer,
  argTypes: {
    photoUrl: {
      type: ''
    }
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = () => <ProfileViewer />
