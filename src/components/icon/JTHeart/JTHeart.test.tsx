import { render } from '@testing-library/react'
import { JTHeart } from '.'

describe('<JTHeart>', () => {
  it('Should render SVG with #fff color fill when isInCart is true', () => {
    const { container } = render(<JTHeart isInCart={true} />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('fill', '#fff')
  })

  it('Should render SVG fill none when isInCart is false', () => {
    const { container } = render(<JTHeart isInCart={false} />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('fill', 'none')
  })
})
