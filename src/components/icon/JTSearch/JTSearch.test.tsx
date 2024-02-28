import { render } from '@testing-library/react'
import { JTSearch } from '.'

describe('<JTSearch>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTSearch />)
    const path = container.querySelector('svg')
    expect(path).toBeInTheDocument()
  })

  it('Should render SVG with #f00 color', () => {
    const { container } = render(<JTSearch color={'#f00'} />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('stroke', '#f00')
  })

  it('Should render SVG with #CED2DB color when there is no color', () => {
    const { container } = render(<JTSearch />)
    const path = container.querySelector('svg path')
    expect(path).toHaveAttribute('stroke', '#CED2DB')
  })
})
