import { ticket } from '@/mocks/Ticket'
import { render } from '@testing-library/react'
import { TicketCheckout } from '.'

describe('<TicketCheckout>', () => {
  it('Should render TicketCheckout component with ticket information', () => {
    const { getByTestId } = render(<TicketCheckout ticket={ticket} />)
    const ticketChecTicketCheckout = getByTestId('ticket-checkout')
    expect(ticketChecTicketCheckout).toBeInTheDocument()
  })
})
