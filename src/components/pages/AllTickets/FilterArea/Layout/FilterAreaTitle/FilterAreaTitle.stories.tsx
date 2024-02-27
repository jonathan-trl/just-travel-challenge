import type { Meta, StoryObj } from '@storybook/react'
import { FilterAreaTitle } from '.'

const meta: Meta<typeof FilterAreaTitle> = {
  title: 'Components/pages/AllTickets/FilterArea/Layout/FilterAreaTitle',
  component: FilterAreaTitle,
  tags: ['autodocs'],
  args: {
    title: 'Preço',
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export default meta
type Story = StoryObj<typeof FilterAreaTitle>

export const Default: Story = {
  args: {},
}
