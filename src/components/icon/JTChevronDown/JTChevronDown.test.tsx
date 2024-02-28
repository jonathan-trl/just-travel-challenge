import { render } from '@testing-library/react'
import { JTChevronDown } from '.'

describe('<JTChevronDown>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTChevronDown />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
