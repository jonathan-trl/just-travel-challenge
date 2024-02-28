import { fireEvent, render } from '@testing-library/react'
import { TicketHeader } from '.'

describe('<TicketHeader>', () => {
  const ticket = {
    id: '1',
    name: 'Museu de Arte Moderna',
    location: 'Rio de Janeiro, RJ',
    image: 'https://i.postimg.cc/zD6RYYc7/museu-de-arte.jpg',
    description:
      'O Museu de Arte Moderna é um espaço cultural dedicado à exibição de obras de arte moderna e contemporânea, destacando-se pela diversidade de artistas e estilos.',
    price: {
      full: 2351.28,
      discount: 1391.28,
    },
    rating: {
      reviewsCount: 345,
      value: 4.3,
    },
    createdAt: new Date('2022-08-31T12:32:09.794Z'),
    updatedAt: new Date('2022-08-31T12:32:09.794Z'),
  }

  it('Should render TicketHeader with heading-3', () => {
    const { getByText, getByRole } = render(<TicketHeader ticket={ticket} />)
    const heading = getByText('Museu de Arte Moderna')
    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe('H3')
  })

  it('Should render TicketHeader with heading-2', () => {
    const { getByText } = render(
      <TicketHeader ticket={ticket} heading="heading-2" />
    )
    const heading = getByText('Museu de Arte Moderna')
    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe('H2')
  })

  it('Should render TicketHeader with location ticket', () => {
    const { getByText } = render(<TicketHeader ticket={ticket} />)
    const location = getByText('Rio de Janeiro, RJ')
    expect(location).toBeInTheDocument()
  })

  it('Should render TicketHeader with link to ticket', () => {
    const { getByRole } = render(<TicketHeader ticket={ticket} />)
    const link = getByRole('link')
    expect(link).toHaveAttribute('href', '/ticket/1')
  })

  it('Should navigate to ticket details page when link is clicked', () => {
    const { getByRole } = render(<TicketHeader ticket={ticket} />)
    const link = getByRole('link')
    expect(link).toHaveAttribute('href', '/ticket/1')
    fireEvent.click(link)
  })
})
