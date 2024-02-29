import type { Meta, StoryObj } from '@storybook/react'
import { TicketItem } from '.'
import { ticketMock } from '@/mocks/Ticket'

const meta: Meta<typeof TicketItem> = {
  title: 'Components/pages/AllTickets/TicketArea/TicketItem',
  component: TicketItem,
  tags: ['autodocs'],
  args: {
    ticket: ticketMock,
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
