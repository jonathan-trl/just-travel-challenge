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
  },
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', height: '600px', width: '600px' }}>
        {Story()}
      </div>
    ),
  ],
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
