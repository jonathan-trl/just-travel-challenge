import { render } from '@testing-library/react'
import { TicketCheckout } from '.'
import { ticketMock } from '@/mocks/Ticket'

describe('<TicketCheckout>', () => {
  it('Should render TicketCheckout component with ticket information', () => {
    const { getByTestId } = render(<TicketCheckout ticket={ticketMock} />)
    const ticketChecTicketCheckout = getByTestId('ticket-checkout')
    expect(ticketChecTicketCheckout).toBeInTheDocument()
  })
})
