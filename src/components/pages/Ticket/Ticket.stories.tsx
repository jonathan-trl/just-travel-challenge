import { ticket } from '@/mocks/Ticket'
import type { Meta, StoryObj } from '@storybook/react'
import { Ticket } from '.'

const meta: Meta<typeof Ticket> = {
  title: 'Components/pages/Ticket',
  component: Ticket,
  tags: ['autodocs'],
  args: {
    ticket: ticket,
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export default meta
type Story = StoryObj<typeof Ticket>

export const Default: Story = {
  args: {},
}
