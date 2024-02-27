import type { Meta, StoryObj } from '@storybook/react'
import { FilterAreaPrice } from '.'

const meta: Meta<typeof FilterAreaPrice> = {
  title: 'Components/pages/AllTickets/FilterArea/FilterAreaPrice',
  component: FilterAreaPrice,
  tags: ['autodocs'],
  args: {},
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
