import { ticketMock } from '@/mocks/Ticket'
import { render } from '@testing-library/react'
import { TicketItem } from '.'

describe('<TicketItem>', () => {
  it('Should render TicketItem correctly', async () => {
    const { getAllByText } = render(<TicketItem ticket={ticketMock} />)

    const text = getAllByText('Museu de Arte Moderna')

    expect(text).toBeTruthy()
  })
})
