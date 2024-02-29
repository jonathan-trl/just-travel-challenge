import type { Meta, StoryObj } from '@storybook/react'
import { CartTickets } from '.'
import { ticketMock } from '@/mocks/Ticket'

const meta: Meta<typeof CartTickets> = {
  title: 'Components/common/Cart/CartTickets',
  component: CartTickets,
  tags: ['autodocs'],
  args: {
    tickets: [
      ticketMock,
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
