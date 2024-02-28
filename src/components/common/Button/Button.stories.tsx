import { JTArrowUpRight } from '@/components/icon/JTArrowUpRight'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'

const meta: Meta<typeof Button> = {
  title: 'Components/common/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    title: 'Button',
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    colorScheme: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    colorScheme: 'secondary',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
  },
}

export const Icon: Story = {
  args: {
    size: 'md',
    icon: JTArrowUpRight,
  },
}
