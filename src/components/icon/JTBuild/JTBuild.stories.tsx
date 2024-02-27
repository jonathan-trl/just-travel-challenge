import type { Meta, StoryObj } from '@storybook/react'
import { JTBuild } from '.'

const meta: Meta<typeof JTBuild> = {
  title: 'Components/icon/JTBuild',
  component: JTBuild,
  tags: ['autodocs'],
  args: {},
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export default meta
type Story = StoryObj<typeof JTBuild>

export const Default: Story = {
  args: {},
}
