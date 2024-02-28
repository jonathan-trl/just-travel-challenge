import { properties } from '@/mocks/filters/Properties'
import type { Meta, StoryObj } from '@storybook/react'
import { FilterAreaProperty } from '.'

const meta: Meta<typeof FilterAreaProperty> = {
  title: 'Components/pages/AllTickets/FilterArea/FilterAreaProperty',
  component: FilterAreaProperty,
  tags: ['autodocs'],
  args: {
    properties,
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export default meta
type Story = StoryObj<typeof FilterAreaProperty>

export const Default: Story = {
  args: {},
}
