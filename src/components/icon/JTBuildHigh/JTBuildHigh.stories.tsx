import type { Meta, StoryObj } from '@storybook/react'
import { JTBuildHigh } from '.'

const meta: Meta<typeof JTBuildHigh> = {
  title: 'Components/icon/JTBuildHigh',
  component: JTBuildHigh,
  tags: ['autodocs'],
  args: {},
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export default meta
type Story = StoryObj<typeof JTBuildHigh>

export const Default: Story = {
  args: {},
}
