import { ticketService } from '@/services/ticketService'
import { useQuery } from '@tanstack/react-query'

export const useTicket = () => {
  const response = useQuery({
    queryKey: ['allTickets'],
    queryFn: ticketService.getAllTickets,
  })

  return response
}
