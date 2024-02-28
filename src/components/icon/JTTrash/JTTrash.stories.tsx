import type { Meta, StoryObj } from '@storybook/react'
import { JTTrash } from '.'

const meta: Meta<typeof JTTrash> = {
  title: 'Components/icon/JTTrash',
  component: JTTrash,
  tags: ['autodocs'],
  args: {},
}

export default meta
type Story = StoryObj<typeof JTTrash>

export const Default: Story = {
  args: {},
}

export const Color: Story = {
  args: {
    color: '#F03D3D',
  },
}

