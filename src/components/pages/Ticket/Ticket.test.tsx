import { render } from '@testing-library/react'
import { Ticket } from '.'
import { ticketMock } from '@/mocks/Ticket'

describe('<Ticket>', () => {
  it('Should render Ticket with ticket heading', () => {
    const { getAllByText } = render(<Ticket ticket={ticketMock} />)

    const ticketHeading = getAllByText(/Museu de Arte Moderna/i)
    expect(ticketHeading).toBeTruthy()
  })

  it('Should render Ticket with ticket image', () => {
    const { getByAltText } = render(<Ticket ticket={ticketMock} />)

    const ticketImage = getByAltText('Imagem do ingresso')
    expect(ticketImage).toBeInTheDocument()
  })

  it('Should render Ticket with TicketInfo', () => {
    const { getByTestId } = render(<Ticket ticket={ticketMock} />)

    const ticketInfo = getByTestId('ticket-info')
    expect(ticketInfo).toBeInTheDocument()
  })

  it('Should render Ticket with TicketCheckout', () => {
    const { getByTestId } = render(<Ticket ticket={ticketMock} />)

    const ticketCheckout = getByTestId('ticket-checkout')
    expect(ticketCheckout).toBeInTheDocument()
  })

  it('Should render back button', () => {
    const { getByRole } = render(<Ticket ticket={ticketMock} />)

    const backButton = getByRole('link', { name: /button back/i })
    expect(backButton).toBeInTheDocument()
  })
})
