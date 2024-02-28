import type { Meta, StoryObj } from '@storybook/react'
import { JTArrowRight } from '.'

const meta: Meta<typeof JTArrowRight> = {
  title: 'Components/icon/JTArrowRight',
  component: JTArrowRight,
  tags: ['autodocs'],
  args: {
  },
}

export default meta
type Story = StoryObj<typeof JTArrowRight>

export const Default: Story = {
  args: {
  },
}

export const Color: Story = {
  args: {
    color: '#F03D3D',
  },
}
