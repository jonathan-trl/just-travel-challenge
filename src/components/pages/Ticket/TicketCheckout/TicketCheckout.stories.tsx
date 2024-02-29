import { ticketMock } from '@/mocks/Ticket'
import type { Meta, StoryObj } from '@storybook/react'
import { TicketCheckout } from '.'

const meta: Meta<typeof TicketCheckout> = {
  title: 'Components/pages/Ticket/TicketCheckout',
  component: TicketCheckout,
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
type Story = StoryObj<typeof TicketCheckout>

export const Default: Story = {
  args: {},
}
