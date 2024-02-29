import type { Meta, StoryObj } from '@storybook/react'
import { TicketHeader } from '.'
import { ticketMock } from '@/mocks/Ticket'

const meta: Meta<typeof TicketHeader> = {
  title: 'Components/common/TicketHeader',
  component: TicketHeader,
  tags: ['autodocs'],
  args: {
    heading: 'heading-2',
    ticket: ticketMock,
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export default meta
type Story = StoryObj<typeof TicketHeader>

export const Heading2: Story = {
  args: {
    heading: 'heading-2',
  },
}

export const Heading3: Story = {
  args: {
    heading: 'heading-3',
  },
}
