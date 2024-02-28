import { render } from '@testing-library/react'
import { JTArrowUpRight } from '.'

describe('<JTArrowUpRight>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTArrowUpRight />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('fill', '#fff')
    expect(svg).toBeInTheDocument()
  })

  it('Should render SVG with #fff color path', () => {
    const { container } = render(<JTArrowUpRight color={'#fff'} />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('stroke', '#fff')
  })

  it('Should render SVG with #f00 color path', () => {
    const { container } = render(<JTArrowUpRight color={'#f00'} />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('stroke', '#f00')
  })
})
