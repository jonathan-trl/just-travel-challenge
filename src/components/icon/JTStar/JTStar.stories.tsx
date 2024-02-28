import type { Meta, StoryObj } from '@storybook/react'
import { JTStar } from '.'

const meta: Meta<typeof JTStar> = {
  title: 'Components/icon/JTStar',
  component: JTStar,
  tags: ['autodocs'],
  args: {},
}

export default meta
type Story = StoryObj<typeof JTStar>

export const Default: Story = {
  args: {},
}

export const Color: Story = {
  args: {
    color: '#F03D3D',
  },
}

