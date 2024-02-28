import { render } from '@testing-library/react'
import { JTStar } from '.'

describe('<JTStar>', () => {
  it('Should render SVG correctly', () => {
    const { container } = render(<JTStar />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
