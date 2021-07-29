import { Story, Meta } from '@storybook/react/types-6-0'

import Header, { HeaderProps } from '.'

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    user: { type: '' }
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<HeaderProps> = (args) => <Header {...args} />

Default.args = {
  user: {
    photoUrl: 'https://github.com/iankakaruzia.png',
    name: 'Ianka Karúzia'
  }
}
