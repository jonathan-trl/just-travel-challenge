import { render } from '@testing-library/react'
import { JTUser } from '.'

describe('<JTUser>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTUser />)
    const path = container.querySelector('svg')
    expect(path).toBeInTheDocument()
  })

  it('Should render SVG with #f00 color', () => {
    const { container } = render(<JTUser color={'#f00'} />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('fill', '#f00')
  })

  it('Should render SVG with #4070F4 color when there is no color', () => {
    const { container } = render(<JTUser />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('fill', '#4070F4')
  })
})
