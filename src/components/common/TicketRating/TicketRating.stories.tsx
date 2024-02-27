import type { Meta, StoryObj } from '@storybook/react'
import { TicketRating } from '.'

const meta: Meta<typeof TicketRating> = {
  title: 'Components/common/TicketRating',
  component: TicketRating,
  tags: ['autodocs'],
  args: {
    rating: {
      reviewsCount: 345,
      value: 4.3,
    },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export default meta
type Story = StoryObj<typeof TicketRating>

export const Heading2: Story = {
  args: {
    rating: {
      reviewsCount: 345,
      value: 4.3,
    },
  },
}
