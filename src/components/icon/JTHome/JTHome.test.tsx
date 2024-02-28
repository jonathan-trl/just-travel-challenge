import { render } from '@testing-library/react'
import { JTHome } from '.'

describe('<JTHome>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTHome />)
    const path = container.querySelector('svg')
    expect(path).toBeInTheDocument()
  })

  it('Should render SVG with #f00 color', () => {
    const { container } = render(<JTHome color={'#f00'} />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('stroke', '#f00')
  })

  it('Should render SVG with #4070F4 color when there is no color', () => {
    const { container } = render(<JTHome />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('stroke', '#4070F4')
  })
})
