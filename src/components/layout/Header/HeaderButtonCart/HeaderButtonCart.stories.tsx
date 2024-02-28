import type { Meta, StoryObj } from '@storybook/react'
import { HeaderButtonCart } from '.'

const meta: Meta<typeof HeaderButtonCart> = {
  title: 'Components/layout/Header/HeaderButtonCart',
  component: HeaderButtonCart,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', height: '200px', width: '500px' }}>
        {Story()}
      </div>
    ),
  ],
  args: {},
}

export default meta
type Story = StoryObj<typeof HeaderButtonCart>

export const Default: Story = {
  args: {},
}
