import { ticketMock } from '@/mocks/Ticket'
import { render } from '@testing-library/react'
import { TicketInfo } from '.'

describe('<TicketInfo>', () => {
  it('Should render TicketInfo component with ticket information', () => {
    const { getByTestId } = render(<TicketInfo ticket={ticketMock} />)
    const ticketInfo = getByTestId('ticket-info')
    expect(ticketInfo).toBeInTheDocument()
  })
})
