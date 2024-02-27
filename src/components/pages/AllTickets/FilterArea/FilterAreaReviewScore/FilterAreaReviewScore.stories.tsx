import type { Meta, StoryObj } from '@storybook/react'
import { FilterAreaReviewScore } from '.'

const meta: Meta<typeof FilterAreaReviewScore> = {
  title: 'Components/pages/AllTickets/FilterArea/FilterAreaReviewScore',
  component: FilterAreaReviewScore,
  tags: ['autodocs'],
  args: {},
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export default meta
type Story = StoryObj<typeof FilterAreaReviewScore>

export const Default: Story = {
  args: {},
}
