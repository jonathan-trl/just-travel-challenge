import { Ticket } from '@/components/pages/Ticket'
import { ticketService } from '@/services/ticketService'

const Page = async ({ params }: { params?: { id: string } }) => {
  const ticket = await ticketService.getTicketDetails(params ? params.id : '1')

  return <Ticket ticket={ticket} />
}

export default Page
