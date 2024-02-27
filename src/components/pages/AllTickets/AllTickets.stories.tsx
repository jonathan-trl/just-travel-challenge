import type { Meta, StoryObj } from '@storybook/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AllTickets } from '.'

const queryClient = new QueryClient()

const meta: Meta<typeof AllTickets> = {
  title: 'Components/pages/AllTickets',
  component: AllTickets,
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
type Story = StoryObj<typeof AllTickets>

export const Default: Story = {
  args: {},
}
