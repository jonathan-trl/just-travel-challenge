import { render } from '@testing-library/react'
import { JTLocation } from '.'

describe('<JTLocation>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTLocation />)
    const path = container.querySelector('svg')
    expect(path).toBeInTheDocument()
  })

  it('Should render SVG with #f00 color', () => {
    const { container } = render(<JTLocation color={'#f00'} />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('stroke', '#f00')
  })

  it('Should render SVG with #4070F4 color when there is no color', () => {
    const { container } = render(<JTLocation />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('stroke', '#4070F4')
  })
})
