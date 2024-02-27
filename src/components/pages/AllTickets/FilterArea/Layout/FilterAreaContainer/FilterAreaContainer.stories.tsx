import type { Meta, StoryObj } from '@storybook/react'
import { FilterAreaContainer } from '.'

const meta: Meta<typeof FilterAreaContainer> = {
  title: 'Components/pages/AllTickets/FilterArea/Layout/FilterAreaContainer',
  component: FilterAreaContainer,
  tags: ['autodocs'],
  args: {
    children: <h1>Container</h1>,
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export default meta
type Story = StoryObj<typeof FilterAreaContainer>

export const Default: Story = {
  args: {},
}
