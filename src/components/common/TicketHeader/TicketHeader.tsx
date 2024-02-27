import { JTLocation } from '@/components/icon/JTLocation'
import { TicketItem } from '@/types/Ticket'
import Link from 'next/link'

type TicketHeaderProps = {
  heading?: 'heading-2' | 'heading-3'
} & TicketItem

export const TicketHeader = ({
  heading = 'heading-3',
  ticket,
}: TicketHeaderProps) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <Link href={`/ticket/${ticket.id}`}>
        {heading === 'heading-2' && <h2>{ticket.name}</h2>}
        {heading === 'heading-3' && <h3>{ticket.name}</h3>}
      </Link>
      <div className="flex items-center gap-1">
        <span>
          <JTLocation />
        </span>
        <span className="text-normal text-gray-80">{ticket.location}</span>
      </div>
    </div>
  )
}
