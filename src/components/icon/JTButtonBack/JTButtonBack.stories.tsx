import type { Meta, StoryObj } from '@storybook/react'
import { JTButtonBack } from '.'

const meta: Meta<typeof JTButtonBack> = {
  title: 'Components/icon/JTButtonBack',
  component: JTButtonBack,
  tags: ['autodocs'],
  args: {},
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export default meta
type Story = StoryObj<typeof JTButtonBack>

export const Default: Story = {
  args: {},
}
