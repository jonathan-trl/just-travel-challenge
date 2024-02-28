import { render } from '@testing-library/react'
import { JTButtonBack } from '.'

describe('<JTButtonBack>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTButtonBack />)
    const path = container.querySelector('svg')
    expect(path).toBeInTheDocument()
  })

  it('Should render SVG with #fff color', () => {
    const { container } = render(<JTButtonBack color={'#fff'} />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('stroke', '#fff')
  })

  it('Should render SVG with #323232 color when there is no color', () => {
    const { container } = render(<JTButtonBack />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('stroke', '#323232')
  })
})
