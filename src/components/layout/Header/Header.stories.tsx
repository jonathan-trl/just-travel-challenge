import type { Meta, StoryObj } from '@storybook/react'
import { Header } from '.'

const meta: Meta<typeof Header> = {
  title: 'Components/layout/Header',
  component: Header,
  tags: ['autodocs'],
  args: {},
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {},
}
