import { ticketMock } from '@/mocks/Ticket'
import { render } from '@testing-library/react'
import { CartTicketsItem } from '.'

describe('<CartTicketsItem>', () => {
  it('Should render CartTicketsItem correctly', () => {
    const { getByText } = render(<CartTicketsItem ticket={ticketMock} />)
    const ticketName = getByText(new RegExp(ticketMock.name, 'i'))
    expect(ticketName).toBeInTheDocument()
  })
})
