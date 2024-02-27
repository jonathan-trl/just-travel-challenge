import type { Meta, StoryObj } from '@storybook/react'
import { JTTravelTicket } from '.'

const meta: Meta<typeof JTTravelTicket> = {
  title: 'Components/icon/JTTravelTicket',
  component: JTTravelTicket,
  tags: ['autodocs'],
  args: {},
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export default meta
type Story = StoryObj<typeof JTTravelTicket>

export const Default: Story = {
  args: {},
}
