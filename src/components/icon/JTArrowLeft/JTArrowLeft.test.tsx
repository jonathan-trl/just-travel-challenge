import { render } from '@testing-library/react'
import { JTArrowLeft } from '.'

describe('<JTArrowLeft>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTArrowLeft />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('Should render SVG with #fff color when color is #fff', () => {
    const { container } = render(<JTArrowLeft color="#fff" />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('fill', '#fff')
  })

  it('Should render SVG with #455CC7 color when there is no color', () => {
    const { container } = render(<JTArrowLeft />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('fill', '#455CC7')
  })
})
