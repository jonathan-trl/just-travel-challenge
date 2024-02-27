import type { Meta, StoryObj } from '@storybook/react'
import { JTArrowLeft } from '.'

const meta: Meta<typeof JTArrowLeft> = {
  title: 'Components/icon/JTArrowLeft',
  component: JTArrowLeft,
  tags: ['autodocs'],
  args: {
  },
}

export default meta
type Story = StoryObj<typeof JTArrowLeft>

export const NotDisabled: Story = {
  args: {
    disable: false,
  },
}

export const Disabled: Story = {
  args: {
    disable: true,
  },
}