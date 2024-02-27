import type { Meta, StoryObj } from '@storybook/react'
import { JTLogo } from '.'

const meta: Meta<typeof JTLogo> = {
  title: 'Components/icon/JTLogo',
  component: JTLogo,
  tags: ['autodocs'],
  args: {},
}

export default meta
type Story = StoryObj<typeof JTLogo>

export const Default: Story = {
  args: {},
}
