import { render } from '@testing-library/react'
import { JTTravelTicket } from '.'

describe('<JTTravelTicket>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTTravelTicket />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
