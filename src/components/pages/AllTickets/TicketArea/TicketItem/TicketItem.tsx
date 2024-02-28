import { Button } from '@/components/common/Button'
import { TicketHeader } from '@/components/common/TicketHeader'
import { TicketRating } from '@/components/common/TicketRating'
import { JTArrowUpRight } from '@/components/icon/JTArrowUpRight'
import { JTHeart } from '@/components/icon/JTHeart'
import { useCart } from '@/store/useCart'
import { TicketItem as TTicketItem, Ticket } from '@/types/Ticket'
import { formatPrice } from '@/utils/formatPrice'
import Image from 'next/image'
import { TicketItemButton } from './TicketItemButton'

export const TicketItem = ({ ticket }: TTicketItem) => {
  const { cart, toggle } = useCart()

  const handleAddItem = (ticket: Ticket) => {
    toggle(ticket)
  }

  const isInCart = cart.some((cartTicket) => cartTicket.id === ticket.id)

  return (
    <div className="flex w-full h-[233px] items-center bg-white shadow-sm">
      <div className="w-[20%] relative py-4 px-3 h-full">
        {ticket.image && (
          <Image src={ticket.image} fill className="object-cover z-10" alt="" />
        )}
        <div className="relative flex items-start justify-between z-20">
          <TicketItemButton title="Ingresso" />
          <button onClick={() => handleAddItem(ticket)}>
            <JTHeart isInCart={isInCart} />
          </button>
        </div>
      </div>
      <div className="w-[60%] flex flex-col flex-1 px-12 border-r border-r-gray-10">
        <div className="mb-12">
          <TicketHeader ticket={ticket} />
        </div>
        <TicketRating rating={ticket.rating} />
      </div>
      <div className="w-[20%] px-8">
        <span className="text-sm text-gray-50">
          de{' '}
          <span className="text-normal">{formatPrice(ticket.price.full)} </span>
          por
        </span>
        <div className="flex items-start mt-1">
          <span className="text-brand-black">R$</span>
          <span className="text-heading-2 font-bold text-brand-blue inline-block ml-1">
            {formatPrice(ticket.price.discount, false)}
          </span>
        </div>
        <div className="mt-spacing-sm">
          <Button
            size="sm"
            colorScheme="primary"
            title="Saber mais"
            disabled
            href={`/ticket/${ticket.id}`}
            icon={JTArrowUpRight}
          />
        </div>
      </div>
    </div>
  )
}
