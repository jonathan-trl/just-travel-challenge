import type { Meta, StoryObj } from '@storybook/react'
import { SearchArea } from '.'

const meta: Meta<typeof SearchArea> = {
  title: 'Components/pages/AllTickets/SearchArea',
  component: SearchArea,
  tags: ['autodocs'],
  args: {},
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export default meta
type Story = StoryObj<typeof SearchArea>

export const Default: Story = {
  args: {},
}
