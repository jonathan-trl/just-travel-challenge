import Loading from '@/app/loading'
import { usePagination } from '@/hooks/usePagination'
import { useTicket } from '../../../../hooks/useTicket'
import { Ticket } from '@/types/Ticket'
import { TicketItem } from './TicketItem'
import { TicketPagination } from './TicketPagination'

type TicketAreaProps = {
  filteredTickets?: Ticket[]
}

export const TicketArea = ({ filteredTickets }: TicketAreaProps) => {
  const { data: allTickets, isError, isLoading } = useTicket()

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
    <>
      {isLoading && <Loading />}
      
      {currentData &&
        currentData.map((ticket) => (
          <TicketItem ticket={ticket} key={ticket.id} />
        ))}

      {!isLoading && (
        <div data-testid="ticket-pagination">
          <TicketPagination
            totalResults={ticketsToPaginate.length}
            totalPages={totalPages}
            currentPage={currentPage}
            handleChangePage={handleChangePage}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
          />
        </div>
      )}
    </>
  )
}
