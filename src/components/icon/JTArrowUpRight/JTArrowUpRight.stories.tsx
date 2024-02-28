import type { Meta, StoryObj } from '@storybook/react'
import { JTArrowUpRight } from '.'

const meta: Meta<typeof JTArrowUpRight> = {
  title: 'Components/icon/JTArrowUpRight',
  component: JTArrowUpRight,
  tags: ['autodocs'],
  args: {},
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export default meta
type Story = StoryObj<typeof JTArrowUpRight>

export const Default: Story = {
  args: {
  },
}

export const Color: Story = {
  args: {
    color: '#F03D3D',
  },
}
