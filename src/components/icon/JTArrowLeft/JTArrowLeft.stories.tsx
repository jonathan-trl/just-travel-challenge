import type { Meta, StoryObj } from '@storybook/react'
import { JTArrowLeft } from '.'

const meta: Meta<typeof JTArrowLeft> = {
  title: 'Components/icon/JTArrowLeft',
  component: JTArrowLeft,
  tags: ['autodocs'],
  args: {},
}

export default meta
type Story = StoryObj<typeof JTArrowLeft>

export const Default: Story = {
  args: {},
}

export const Color: Story = {
  args: {
    color: '#F03D3D',
  },
}
