import { ticketMock } from '@/mocks/Ticket'
import { render } from '@testing-library/react'
import { CartTickets } from '.'

describe('<CartTickets>', () => {
  it('Should render CartTickets correctly', () => {
    const { getByText } = render(<CartTickets tickets={[ticketMock]} />)
    const componentTitle = getByText(/Ingressos/i)
    expect(componentTitle).toBeInTheDocument()
  })
})
