import { render } from '@testing-library/react'
import { JTHeart } from '.'

describe('<JTHeart>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTHeart />)
    const path = container.querySelector('svg')
    expect(path).toBeInTheDocument()
  })

  it('Should render SVG with #f00 color', () => {
    const { container } = render(<JTHeart color={'#f00'} />)

    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('fill', '#f00')

    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('stroke', '#f00')
  })

  it('Should render SVG with #fff color when there is no color', () => {
    const { container } = render(<JTHeart />)

    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('fill', 'none')

    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('stroke', '#fff')
  })
})
