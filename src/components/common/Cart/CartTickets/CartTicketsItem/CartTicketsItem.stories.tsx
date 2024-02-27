import type { Meta, StoryObj } from '@storybook/react'
import { CartTicketsItem } from '.'

const meta: Meta<typeof CartTicketsItem> = {
  title: 'Components/common/Cart/CartTickets/CartTicketsItem',
  component: CartTicketsItem,
  tags: ['autodocs'],
  args: {
    ticket: {
      id: '1',
      name: 'Museu de Arte Moderna',
      location: 'Rio de Janeiro, RJ',
      image: 'https://i.postimg.cc/zD6RYYc7/museu-de-arte.jpg',
      description:
        'O Museu de Arte Moderna é um espaço cultural dedicado à exibição de obras de arte moderna e contemporânea, destacando-se pela diversidade de artistas e estilos.',
      price: {
        full: 2351.28,
        discount: 1391.28,
      },
      rating: {
        reviewsCount: 345,
        value: 4.3,
      },
      createdAt: new Date('2022-08-31T12:32:09.794Z'),
      updatedAt: new Date('2022-08-31T12:32:09.794Z'),
    },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export default meta
type Story = StoryObj<typeof CartTicketsItem>

export const Default: Story = {
  args: {},
}
