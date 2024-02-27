import type { Meta, StoryObj } from '@storybook/react'
import { JTLocation } from '.'

const meta: Meta<typeof JTLocation> = {
  title: 'Components/icon/JTLocation',
  component: JTLocation,
  tags: ['autodocs'],
  args: {},
}

export default meta
type Story = StoryObj<typeof JTLocation>

export const Default: Story = {
  args: {},
}
