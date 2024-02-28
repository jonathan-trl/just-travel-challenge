import { ticket } from '@/mocks/Ticket'
import { render } from '@testing-library/react'
import { Ticket } from '.'

describe('<Ticket>', () => {
  it('Should render Ticket with ticket heading', () => {
    const { getByText } = render(<Ticket ticket={ticket} />)

    const ticketHeading = getByText('Museu de Arte Moderna')
    expect(ticketHeading).toBeInTheDocument()
  })

  it('Should render Ticket with ticket image', () => {
    const { getByAltText } = render(<Ticket ticket={ticket} />)

    const ticketImage = getByAltText('Imagem do ingresso')
    expect(ticketImage).toBeInTheDocument()
  })

  it('Should render Ticket with TicketInfo', () => {
    const { getByTestId } = render(<Ticket ticket={ticket} />)

    const ticketInfo = getByTestId('ticket-info')
    expect(ticketInfo).toBeInTheDocument()
  })

  it('Should render Ticket with TicketCheckout', () => {
    const { getByTestId } = render(<Ticket ticket={ticket} />)

    const ticketCheckout = getByTestId('ticket-checkout')
    expect(ticketCheckout).toBeInTheDocument()
  })

  it('Should render back button', () => {
    const { getByRole } = render(<Ticket ticket={ticket} />)

    const backButton = getByRole('link', { name: /button back/i })
    expect(backButton).toBeInTheDocument()
  })
})
