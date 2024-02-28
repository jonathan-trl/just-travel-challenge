import { ticket } from '@/mocks/Ticket'
import type { Meta, StoryObj } from '@storybook/react'
import { Cart } from '.'

const meta: Meta<typeof Cart> = {
  title: 'Components/common/Cart',
  component: Cart,
  tags: ['autodocs'],
  args: {
    cart: [
      {
        ...ticket,
        count: 1,
      },
    ],
    totalPrice: () => 1440
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export default meta
type Story = StoryObj<typeof Cart>

export const Default: Story = {
  args: {},
}

export const Empty: Story = {
  args: {
    cart: [],
  },
}
