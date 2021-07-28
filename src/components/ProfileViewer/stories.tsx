import { Story, Meta } from '@storybook/react/types-6-0'

import ProfileViewer, { ProfileViewerProps } from '.'

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

export const Default: Story<ProfileViewerProps> = (args) => (
  <ProfileViewer {...args} />
)

Default.args = {
  photoUrl: 'https://github.com/iankakaruzia.png',
  name: 'Ianka Karúzia',
  bio: 'I am a software developer and a big fan of devchallenges...',
  email: 'ianka@email.com'
}
