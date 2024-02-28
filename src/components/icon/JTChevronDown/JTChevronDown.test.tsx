import { render } from '@testing-library/react'
import { JTChevronDown } from '.'

describe('<JTChevronDown>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTChevronDown />)
    const path = container.querySelector('svg')
    expect(path).toBeInTheDocument()
  })

  it('Should render SVG with #f00 color', () => {
    const { container } = render(<JTChevronDown color={'#f00'} />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('stroke', '#f00')
  })

  it('Should render SVG with #323232 color when there is no color', () => {
    const { container } = render(<JTChevronDown />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('stroke', '#323232')
  })
})
