import { ratings } from '@/mocks/filters/Ratings'
import type { Meta, StoryObj } from '@storybook/react'
import { FilterAreaRating } from '.'

const meta: Meta<typeof FilterAreaRating> = {
  title: 'Components/pages/AllTickets/FilterArea/FilterAreaRating',
  component: FilterAreaRating,
  tags: ['autodocs'],
  args: {
    ratings,
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export default meta
type Story = StoryObj<typeof FilterAreaRating>

export const Default: Story = {
  args: {},
}
