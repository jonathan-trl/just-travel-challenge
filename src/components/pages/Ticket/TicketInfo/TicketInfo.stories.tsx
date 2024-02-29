import { ticketMock } from '@/mocks/Ticket'
import type { Meta, StoryObj } from '@storybook/react'
import { TicketInfo } from '.'

const meta: Meta<typeof TicketInfo> = {
  title: 'Components/pages/Ticket/TicketInfo',
  component: TicketInfo,
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
type Story = StoryObj<typeof TicketInfo>

export const Default: Story = {
  args: {},
}
