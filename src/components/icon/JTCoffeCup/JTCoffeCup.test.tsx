import { render } from '@testing-library/react'
import { JTCoffeCup } from '.'

describe('<JTCoffeCup>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTCoffeCup />)
    const path = container.querySelector('svg')
    expect(path).toBeInTheDocument()
  })

  it('Should render SVG with #f00 color', () => {
    const { container } = render(<JTCoffeCup color={'#f00'} />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('stroke', '#f00')
  })

  it('Should render SVG with #9EA5B8 color when there is no color', () => {
    const { container } = render(<JTCoffeCup />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('stroke', '#9EA5B8')
  })
})
