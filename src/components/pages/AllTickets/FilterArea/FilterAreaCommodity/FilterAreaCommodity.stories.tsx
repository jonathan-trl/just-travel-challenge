import { commodities } from '@/mocks/filters/Commodities'
import type { Meta, StoryObj } from '@storybook/react'
import { FilterAreaCommodity } from '.'

const meta: Meta<typeof FilterAreaCommodity> = {
  title: 'Components/pages/AllTickets/FilterArea/FilterAreaCommodity',
  component: FilterAreaCommodity,
  tags: ['autodocs'],
  args: {
    commodities,
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export default meta
type Story = StoryObj<typeof FilterAreaCommodity>

export const Default: Story = {
  args: {},
}
