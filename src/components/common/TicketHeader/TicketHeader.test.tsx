import { ticketMock } from '@/mocks/Ticket'
import { fireEvent, render } from '@testing-library/react'
import { TicketHeader } from '.'

describe('<TicketHeader>', () => {
  it('Should render TicketHeader with heading-3', () => {
    const { getByText } = render(<TicketHeader ticket={ticketMock} />)
    const heading = getByText(new RegExp(ticketMock.name, 'i'))
    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe('H3')
  })

  it('Should render TicketHeader with heading-2', () => {
    const { getByText } = render(
      <TicketHeader ticket={ticketMock} heading="heading-2" />
    )
    const heading = getByText(new RegExp(ticketMock.name, 'i'))
    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe('H2')
  })

  it('Should render TicketHeader with location ticket', () => {
    const { getByText } = render(<TicketHeader ticket={ticketMock} />)
    const location = getByText(new RegExp(ticketMock.location))
    expect(location).toBeInTheDocument()
  })

  it('Should render TicketHeader with link to ticket', () => {
    const { getByRole } = render(<TicketHeader ticket={ticketMock} />)
    const link = getByRole('link')
    expect(link).toHaveAttribute('href', '/ticket/1')
  })

  it('Should navigate to ticket details page when link is clicked', () => {
    const { getByRole } = render(<TicketHeader ticket={ticketMock} />)
    const link = getByRole('link')
    expect(link).toHaveAttribute('href', '/ticket/1')
    fireEvent.click(link)
  })
})
