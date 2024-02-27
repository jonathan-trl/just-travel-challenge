import type { Meta, StoryObj } from '@storybook/react'
import { CartTickets } from '.'

const meta: Meta<typeof CartTickets> = {
  title: 'Components/common/Cart/CartTickets',
  component: CartTickets,
  tags: ['autodocs'],
  args: {
    tickets: [
      {
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
      {
        id: '2',
        name: 'Torre Eiffel',
        location: 'Paris, França',
        image: 'https://i.postimg.cc/JhFkqsSN/torre-eiffel.jpg',
        description:
          'A Torre Eiffel é um ícone da arquitetura mundial, situada em Paris, oferecendo uma vista deslumbrante da cidade luz a partir de seus diferentes níveis.',
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
    ],
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export default meta
type Story = StoryObj<typeof CartTickets>

export const Default: Story = {
  args: {},
}
