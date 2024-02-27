import type { Meta, StoryObj } from '@storybook/react'
import { FilterArea } from '.'

const meta: Meta<typeof FilterArea> = {
  title: 'Components/pages/AllTickets/FilterArea',
  component: FilterArea,
  tags: ['autodocs'],
  args: {},
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export default meta
type Story = StoryObj<typeof FilterArea>

export const Default: Story = {
  args: {},
}
