import type { Meta, StoryObj } from '@storybook/react'
import { HeaderButtonCart } from '.'

const meta: Meta<typeof HeaderButtonCart> = {
  title: 'Components/layout/Header/HeaderButtonCart',
  component: HeaderButtonCart,
  tags: ['autodocs'],
  args: {},
}

export default meta
type Story = StoryObj<typeof HeaderButtonCart>

export const Default: Story = {
  args: {},
}
