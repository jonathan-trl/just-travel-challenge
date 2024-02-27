import type { Meta, StoryObj } from '@storybook/react'
import { JTCoffeCup } from '.'

const meta: Meta<typeof JTCoffeCup> = {
  title: 'Components/icon/JTCoffeCup',
  component: JTCoffeCup,
  tags: ['autodocs'],
  args: {},
}

export default meta
type Story = StoryObj<typeof JTCoffeCup>

export const Default: Story = {
  args: {},
}
