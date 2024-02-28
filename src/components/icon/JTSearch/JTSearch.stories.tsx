import type { Meta, StoryObj } from '@storybook/react'
import { JTSearch } from '.'

const meta: Meta<typeof JTSearch> = {
  title: 'Components/icon/JTSearch',
  component: JTSearch,
  tags: ['autodocs'],
  args: {},
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export default meta
type Story = StoryObj<typeof JTSearch>

export const Default: Story = {
  args: {},
}

export const Color: Story = {
  args: {
    color: '#F03D3D',
  },
}

