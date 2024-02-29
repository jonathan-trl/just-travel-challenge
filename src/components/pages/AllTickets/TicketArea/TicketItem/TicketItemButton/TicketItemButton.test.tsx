import { render } from '@testing-library/react'
import { TicketItemButton } from '.'

describe('<TicketItemButton>', () => {
  it('Should render TicketItemButton correctly', async () => {
    const { getByText } = render(<TicketItemButton title="Ingresso" />)

    const text = getByText('Ingresso')

    expect(text).toBeInTheDocument()
  })
})
