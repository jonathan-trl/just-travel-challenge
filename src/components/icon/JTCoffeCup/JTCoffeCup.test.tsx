import { render } from '@testing-library/react'
import { JTCoffeCup } from '.'

describe('<JTCoffeCup>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTCoffeCup />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
