import { render } from '@testing-library/react'
import { JTTravelTicket } from '.'

describe('<JTTravelTicket>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTTravelTicket />)
    const path = container.querySelector('svg')
    expect(path).toBeInTheDocument()
  })

  it('Should render SVG with #f00 color', () => {
    const { container } = render(<JTTravelTicket color={'#f00'} />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('stroke', '#f00')
  })

  it('Should render SVG with #9EA5B8 color when there is no color', () => {
    const { container } = render(<JTTravelTicket />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('stroke', '#9EA5B8')
  })
})
