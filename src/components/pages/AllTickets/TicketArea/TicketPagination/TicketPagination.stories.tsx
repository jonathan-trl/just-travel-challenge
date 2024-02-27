import type { Meta, StoryObj } from '@storybook/react'
import { TicketPagination } from '.'

const meta: Meta<typeof TicketPagination> = {
  title: 'Components/pages/AllTickets/TicketArea/TicketPagination',
  component: TicketPagination,
  tags: ['autodocs'],
  args: {
    currentPage: 1,
    totalPages: 4,
    totalResults: 24,
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export default meta
type Story = StoryObj<typeof TicketPagination>

export const Default: Story = {
  args: {},
}
