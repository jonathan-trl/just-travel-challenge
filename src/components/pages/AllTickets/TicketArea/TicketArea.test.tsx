import { ticketMock } from '@/mocks/Ticket'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { TicketArea } from '.'
import { useTicket } from '../../../../hooks/useTicket'

// const useTicketMocked: jest.MockedFunction<typeof useTicket> = jest.fn()

jest.mock('../../../../hooks/useTicket')

const useTicketMocked = jest.mocked(useTicket)

const queryClient = new QueryClient()

describe('<TicketArea>', () => {
  it('Should render Loading when isLoading be true', async () => {
    useTicketMocked.mockImplementation(
      () =>
        ({
          isLoading: true,
        } as any)
    )

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <TicketArea />
      </QueryClientProvider>
    )

    const textLoading = getByText(/Carregando.../i)
    expect(textLoading).toBeInTheDocument()
  })

  it('Should render ticket when return data tickets and loading be false', async () => {
    useTicketMocked.mockImplementation(
      () =>
        ({
          data: [ticketMock],
          isLoading: false,
        } as any)
    )

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <TicketArea />
      </QueryClientProvider>
    )

    const ticket = getByText(new RegExp(ticketMock.name, 'i'))
    expect(ticket).toBeInTheDocument()
  })

  it('Should render ticket pagination when isLoading be false', async () => {
    useTicketMocked.mockImplementation(
      () =>
        ({
          isLoading: false,
        } as any)
    )

    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <TicketArea />
      </QueryClientProvider>
    )

    const ticketPagination = getByTestId('ticket-pagination')
    expect(ticketPagination).toBeInTheDocument()
  })
})
