import type { Meta, StoryObj } from '@storybook/react'
import { JTChevronDown } from '.'

const meta: Meta<typeof JTChevronDown> = {
  title: 'Components/icon/JTChevronDown',
  component: JTChevronDown,
  tags: ['autodocs'],
  args: {},
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export default meta
type Story = StoryObj<typeof JTChevronDown>

export const Default: Story = {
  args: {},
}
