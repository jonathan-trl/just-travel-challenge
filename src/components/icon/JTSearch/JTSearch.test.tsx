import { render } from '@testing-library/react'
import { JTSearch } from '.'

describe('<JTSearch>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTSearch />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
