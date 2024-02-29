import { ticketService } from '@/services/ticketService'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { AllTickets } from '.'

const queryClient = new QueryClient()

jest.mock('../../../services/ticketService', () => ({
  ticketService: {
    filterTicketsByName: jest.fn(),
  },
}))

describe('<AllTickets>', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Should render AllTickets correctly', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <AllTickets />
      </QueryClientProvider>
    )
  })

  it('Should submit form and filter tickets', async () => {
    const queryClient = new QueryClient()

    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <AllTickets />
      </QueryClientProvider>
    )

    const searchInput = getByTestId('search-input')

    fireEvent.change(searchInput, { target: { value: 'Museu' } })
    fireEvent.submit(getByTestId('search-form'))

    await waitFor(() => {
      expect(ticketService.filterTicketsByName).toHaveBeenCalledWith('Museu')
    })
  })
})
