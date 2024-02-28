import { render } from '@testing-library/react'
import { JTStar } from '.'

describe('<JTStar>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTStar />)
    const path = container.querySelector('svg')
    expect(path).toBeInTheDocument()
  })

  it('Should render SVG with #f00 color', () => {
    const { container } = render(<JTStar color={'#f00'} />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('stroke', '#f00')
    expect(path).toHaveAttribute('fill', '#f00')
  })

  it('Should render SVG with #FFAD0D color when there is no color', () => {
    const { container } = render(<JTStar />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('stroke', '#FFAD0D')
    expect(path).toHaveAttribute('fill', '#FFAD0D')
  })
})
