import type { Meta, StoryObj } from '@storybook/react'
import { JTSupport } from '.'

const meta: Meta<typeof JTSupport> = {
  title: 'Components/icon/JTSupport',
  component: JTSupport,
  tags: ['autodocs'],
  args: {},
}

export default meta
type Story = StoryObj<typeof JTSupport>

export const Default: Story = {
  args: {},
}

export const Color: Story = {
  args: {
    color: '#F03D3D',
  },
}

