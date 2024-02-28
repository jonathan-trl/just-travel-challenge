import { render } from '@testing-library/react'
import { TicketRating } from '.'

describe('<TicketRating>', () => {
  const mockRating = {
    value: 4.5,
    reviewsCount: 10,
  }

  it('Should render TicketRating with rating value', () => {
    const { getByText } = render(<TicketRating rating={mockRating} />)
    const ratingValue = getByText('4.5')
    expect(ratingValue).toBeInTheDocument()
  })

  it('Should render TicketRating with reviews count', () => {
    const { getByText } = render(<TicketRating rating={mockRating} />)

    const reviewsCount = getByText('(10 Reviews)')
    expect(reviewsCount).toBeInTheDocument()
  })

  it('Should render TicketRating with corresponding text', () => {
    const { getByText } = render(<TicketRating rating={mockRating} />)
    const excellentText = getByText('Excellent')
    expect(excellentText).toBeInTheDocument()
  })

  it('Should render TicketRating with correct styles', () => {
    const { getByText } = render(<TicketRating rating={mockRating} />)
    const ratingValue = getByText('4.5')
    expect(ratingValue).toHaveClass('text-gray-10')
    expect(ratingValue).toHaveClass('bg-brand-blue')

    const reviewsCount = getByText('(10 Reviews)')
    expect(reviewsCount).toHaveClass('text-gray-40')
  })
})
