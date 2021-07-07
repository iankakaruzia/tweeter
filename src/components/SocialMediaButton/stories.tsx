import { Story, Meta } from '@storybook/react/types-6-0'

import SocialMediaButton, { SocialMediaButtonProps } from '.'

export default {
  title: 'SocialMediaButton',
  component: SocialMediaButton,
  argTypes: {
    socialMedia: {
      control: {
        type: 'select',
        options: ['facebook', 'google', 'twitter', 'github']
      }
    }
  }
} as Meta

export const Default: Story<SocialMediaButtonProps> = (args) => (
  <SocialMediaButton {...args} />
)

Default.args = {
  socialMedia: 'google'
}
