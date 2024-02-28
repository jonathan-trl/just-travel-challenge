import { render } from '@testing-library/react'
import { JTArrowRight } from '.'

describe('<JTArrowRight>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTArrowRight />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('Should render SVG with #fff color when color is #fff', () => {
    const { container } = render(<JTArrowRight color="#fff" />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('fill', '#fff')
  })

  it('Should render SVG with #455CC7 color when there is no color', () => {
    const { container } = render(<JTArrowRight />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('fill', '#455CC7')
  })
})
