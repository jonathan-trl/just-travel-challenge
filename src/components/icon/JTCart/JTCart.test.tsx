import { render } from '@testing-library/react'
import { JTCart } from '.'

describe('<JTCart>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTCart />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
