import type { Meta, StoryObj } from '@storybook/react'
import { ButtonBack } from '.'

const meta: Meta<typeof ButtonBack> = {
  title: 'Components/common/ButtonBack',
  component: ButtonBack,
  tags: ['autodocs'],
  args: {},
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export default meta
type Story = StoryObj<typeof ButtonBack>

export const Default: Story = {
  args: {},
}
