import type { Meta, StoryObj } from '@storybook/react'
import { FilterAreaRatings } from '.'

const meta: Meta<typeof FilterAreaRatings> = {
  title: 'Components/pages/AllTickets/FilterArea/FilterAreaRatings',
  component: FilterAreaRatings,
  tags: ['autodocs'],
  args: {},
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export default meta
type Story = StoryObj<typeof FilterAreaRatings>

export const Default: Story = {
  args: {},
}
