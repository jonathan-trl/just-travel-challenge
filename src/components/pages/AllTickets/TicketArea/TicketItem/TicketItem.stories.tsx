import { ticket } from '@/mocks/Ticket'
import type { Meta, StoryObj } from '@storybook/react'
import { TicketItem } from '.'

const meta: Meta<typeof TicketItem> = {
  title: 'Components/pages/AllTickets/TicketArea/TicketItem',
  component: TicketItem,
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
type Story = StoryObj<typeof TicketItem>

export const Default: Story = {
  args: {},
}
