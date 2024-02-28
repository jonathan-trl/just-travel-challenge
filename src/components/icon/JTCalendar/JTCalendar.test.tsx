import { render } from '@testing-library/react'
import { JTCalendar } from '.'

describe('<JTCalendar>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTCalendar />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
