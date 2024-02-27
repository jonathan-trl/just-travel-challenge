import type { Meta, StoryObj } from '@storybook/react'
import { JTHome } from '.'

const meta: Meta<typeof JTHome> = {
  title: 'Components/icon/JTHome',
  component: JTHome,
  tags: ['autodocs'],
  args: {},
}

export default meta
type Story = StoryObj<typeof JTHome>

export const Default: Story = {
  args: {
    
  },
}

export const Color: Story = {
  args: {
    color: '#f00'
  },
}

