import type { Meta, StoryObj } from '@storybook/react'
import { FilterAreaPrice } from '.'
import { prices } from '@/mocks/filters/Prices'

const meta: Meta<typeof FilterAreaPrice> = {
  title: 'Components/pages/AllTickets/FilterArea/FilterAreaPrice',
  component: FilterAreaPrice,
  tags: ['autodocs'],
  args: {
    prices
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export default meta
type Story = StoryObj<typeof FilterAreaPrice>

export const Default: Story = {
  args: {},
}
