import type { Meta, StoryObj } from '@storybook/react'
import { JTCalendar } from '.'

const meta: Meta<typeof JTCalendar> = {
  title: 'Components/icon/JTCalendar',
  component: JTCalendar,
  tags: ['autodocs'],
  args: {},
}

export default meta
type Story = StoryObj<typeof JTCalendar>

export const Default: Story = {
  args: {},
}

export const Color: Story = {
  args: {
    color: '#F03D3D',
  },
}

