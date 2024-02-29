import { ticketMock } from '@/mocks/Ticket'
import type { Meta, StoryObj } from '@storybook/react'
import { CartTicketsItem } from '.'

const meta: Meta<typeof CartTicketsItem> = {
  title: 'Components/common/Cart/CartTickets/CartTicketsItem',
  component: CartTicketsItem,
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
type Story = StoryObj<typeof CartTicketsItem>

export const Default: Story = {
  args: {},
}
