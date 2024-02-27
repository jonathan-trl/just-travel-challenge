import type { Meta, StoryObj } from '@storybook/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TicketArea } from '.'

const queryClient = new QueryClient()

const meta: Meta<typeof TicketArea> = {
  title: 'Components/pages/AllTickets/TicketArea',
  component: TicketArea,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
    ),
  ],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export default meta
type Story = StoryObj<typeof TicketArea>

export const Default: Story = {
  args: {},
}
