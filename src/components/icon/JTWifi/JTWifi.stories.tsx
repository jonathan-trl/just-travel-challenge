import type { Meta, StoryObj } from '@storybook/react'
import { JTWifi } from '.'

const meta: Meta<typeof JTWifi> = {
  title: 'Components/icon/JTWifi',
  component: JTWifi,
  tags: ['autodocs'],
  args: {},
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export default meta
type Story = StoryObj<typeof JTWifi>

export const Default: Story = {
  args: {},
}
