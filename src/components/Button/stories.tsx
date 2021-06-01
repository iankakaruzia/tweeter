import { Story, Meta } from '@storybook/react/types-6-0'

import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'gray']
      }
    },
    outlined: {
      control: {
        type: 'boolean'
      }
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />

Default.args = {
  children: 'Start coding now'
}

export const asLink: Story = (args) => <Button {...args} />

asLink.args = {
  children: 'Start coding now',
  as: 'a',
  href: '/link'
}
