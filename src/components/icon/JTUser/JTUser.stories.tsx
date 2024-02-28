import type { Meta, StoryObj } from '@storybook/react'
import { JTUser } from '.'

const meta: Meta<typeof JTUser> = {
  title: 'Components/icon/JTUser',
  component: JTUser,
  tags: ['autodocs'],
  args: {},
}

export default meta
type Story = StoryObj<typeof JTUser>

export const Default: Story = {
  args: {},
}

export const Color: Story = {
  args: {
    color: '#F03D3D',
  },
}

