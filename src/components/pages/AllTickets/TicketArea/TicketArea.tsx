import Loading from '@/app/loading'
import { usePagination } from '@/hooks/usePagination'
import { ticketService } from '@/services/ticketService'
import { Ticket } from '@/types/Ticket'
import { useQuery } from '@tanstack/react-query'
import { TicketItem } from './TicketItem'
import { TicketPagination } from './TicketPagination'

type TicketAreaProps = {
  filteredTickets?: Ticket[]
}

export const TicketArea = ({ filteredTickets }: TicketAreaProps) => {
  const {
    data: allTickets,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['allTickets'],
    queryFn: ticketService.getAllTickets,
  })

  const ticketsToPaginate =
    filteredTickets && filteredTickets?.length > 0
      ? filteredTickets
      : allTickets
      ? allTickets
      : []

  const itemsPerPage = 6
  const {
    currentPage,
    currentData,
    handleChangePage,
    handleNextPage,
    handlePreviousPage,
    totalPages,
  } = usePagination(ticketsToPaginate, itemsPerPage)

  if (isError) return <div>Erro ao pegar os ingressos</div>

  return (
    <div className="relative flex flex-col gap-6 lg:col-span-9">
      {isLoading && <Loading />}
      {currentData &&
        currentData.map((ticket) => (
          <TicketItem ticket={ticket} key={ticket.id} />
        ))}

      {
        !isLoading &&
        <TicketPagination
          totalResults={ticketsToPaginate.length}
          totalPages={totalPages}
          currentPage={currentPage}
          handleChangePage={handleChangePage}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
        />
      }
    </div>
  )
}
