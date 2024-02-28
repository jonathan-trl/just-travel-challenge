import { render } from '@testing-library/react'
import { JTArrowLeft } from '.'

describe('<JTArrowLeft>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTArrowLeft />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('Should render SVG with #fff color fill when color is #fff', () => {
    const { container } = render(<JTArrowLeft color="#fff" />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('fill', '#fff')
  })

  it('Should render SVG with #f00 color fill when color is #f00', () => {
    const { container } = render(<JTArrowLeft color="#f00" />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('fill', '#f00')
  })

  it('Should render SVG with #455CC7 color fill when there is no color', () => {
    const { container } = render(<JTArrowLeft />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('fill', '#455CC7')
  })
})
