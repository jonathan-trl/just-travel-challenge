import type { Meta, StoryObj } from '@storybook/react'
import { CartSubtotal } from '.'

const meta: Meta<typeof CartSubtotal> = {
  title: 'Components/common/Cart/CartSubtotal',
  component: CartSubtotal,
  tags: ['autodocs'],
  args: {
    totalPrice: () => 1450,
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export default meta
type Story = StoryObj<typeof CartSubtotal>

export const Default: Story = {
  args: {},
}
