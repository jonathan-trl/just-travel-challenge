import { render } from '@testing-library/react'
import { JTHome } from '.'

describe('<JTHome>', () => {
  it('Should render SVG with #fff color fill when color is #fff', () => {
    const { container } = render(<JTHome color={'#fff'} />)
    const path = container.querySelector('svg path')
    expect(path).toBeInTheDocument()
    expect(path).toHaveAttribute('stroke', '#fff')
  })

  it('Should render SVG with #f00 color fill when color is #f00', () => {
    const { container } = render(<JTHome color={'#f00'} />)
    const path = container.querySelector('svg path')
    expect(path).toBeInTheDocument()
    expect(path).toHaveAttribute('stroke', '#f00')
  })

  it('Should render SVG with #4070F4 color fill when color is empty', () => {
    const { container } = render(<JTHome />)
    const path = container.querySelector('svg path')
    expect(path).toBeInTheDocument()
    expect(path).toHaveAttribute('stroke', '#4070F4')
  })
})
