'use client'
import { Ticket } from '@/components/pages/Ticket'
import { ticketService } from '@/services/ticketService'
import { useQuery } from '@tanstack/react-query'

const Page = ({
  params,
}: {
  params?: { id: string }
}) => {
  const { data: ticket } = useQuery({
    queryKey: ['ticket'],
    queryFn: () => ticketService.getTicketDetails(params ? params.id : '1'),
  })

  if (!ticket) {
    return
  }

  return <Ticket ticket={ticket} />
}

export default Page
