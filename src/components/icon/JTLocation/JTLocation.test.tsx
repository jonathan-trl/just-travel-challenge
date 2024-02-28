import { render } from '@testing-library/react'
import { JTLocation } from '.'

describe('<JTLocation>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTLocation />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
