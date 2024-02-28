import type { Meta, StoryObj } from '@storybook/react'
import { JTHeart } from '.'

const meta: Meta<typeof JTHeart> = {
  title: 'Components/icon/JTHeart',
  component: JTHeart,
  tags: ['autodocs'],
  args: {},
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export default meta
type Story = StoryObj<typeof JTHeart>

export const Default: Story = {
  args: {},
}

export const Color: Story = {
  args: {
    color: '#F03D3D',
  },
}
