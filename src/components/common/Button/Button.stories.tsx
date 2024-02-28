import { JTArrowUpRight } from '@/components/icon/JTArrowUpRight'
import { JTCart } from '@/components/icon/JTCart'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'

const icons = { JTArrowUpRight, JTCart }

const meta: Meta<typeof Button> = {
  title: 'Components/common/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    title: 'Button',
  },
  argTypes: {
    icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        labels: {
          JTArrowUpRight: 'JTArrowUpRight',
          JTCart: 'JTCart',
        },
      },
    },
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
