import { render } from '@testing-library/react'
import { JTCart } from '.'

describe('<JTCart>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTCart />)
    const path = container.querySelector('svg')
    expect(path).toBeInTheDocument()
  })

  it('Should render SVG with #f00 color', () => {
    const { container } = render(<JTCart color={'#f00'} />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('fill', '#f00')
    expect(path).toHaveAttribute('stroke', '#f00')
  })

  it('Should render SVG with #fff color when there is no color', () => {
    const { container } = render(<JTCart />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('fill', '#fff')
    expect(path).toHaveAttribute('stroke', '#fff')
  })
})
