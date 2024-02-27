import type { Meta, StoryObj } from '@storybook/react'
import { JTCart } from '.'

const meta: Meta<typeof JTCart> = {
  title: 'Components/icon/JTCart',
  component: JTCart,
  tags: ['autodocs'],
  args: {},
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export default meta
type Story = StoryObj<typeof JTCart>

export const Default: Story = {
  args: {},
}
