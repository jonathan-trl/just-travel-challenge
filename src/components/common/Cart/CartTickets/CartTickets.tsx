import { Ticket } from '@/types/Ticket'
import { CartTicketsItem } from './CartTicketsItem'

type CartTicketsProps = {
  tickets: Ticket[]
}

export const CartTickets = ({ tickets }: CartTicketsProps) => {
  return (
    <div className="py-5">
      <span className="text-md font-bold text-[#0A1E31]">Ingressos</span>
      {tickets.map((ticket) => (
        <CartTicketsItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  )
}
