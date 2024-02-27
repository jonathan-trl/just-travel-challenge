import type { Meta, StoryObj } from '@storybook/react'
import { TicketItemButton } from '.'

const meta: Meta<typeof TicketItemButton> = {
  title: 'Components/pages/AllTickets/TicketArea/TicketItemButton',
  component: TicketItemButton,
  tags: ['autodocs'],
  args: {
    title: 'Ingresso',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export default meta
type Story = StoryObj<typeof TicketItemButton>

export const Default: Story = {
  args: {},
}
