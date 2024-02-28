import type { Meta, StoryObj } from '@storybook/react'
import { CartCheckout } from '.'

const meta: Meta<typeof CartCheckout> = {
  title: 'Components/common/Cart/CartCheckout',
  component: CartCheckout,
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
type Story = StoryObj<typeof CartCheckout>

export const Default: Story = {
  args: {},
}
